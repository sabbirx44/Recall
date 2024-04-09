import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const Register = () => {

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);

        // Reset success and error
        setSuccess('');
        setError('');

        // Validation
        if (password.length < 6) {
            setError('Password must be 6 characters or longer.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Your password must contain at least one uppercase character.');
            return;
        }
        else if (!accepted) {
            setError('Please accept our terms and conditions');
        }

        // Create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User created successfully.');

                // Update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                    .then(() => console.log("Profile updated"))
                    .catch(error => console.error(error))

                // Send verification email
                sendEmailVerification(result.user)
                    .then(() => {
                        alert("📬 Attention! Verify your account by checking your inbox! 🌟");
                    })
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <div>
            <h1 className="text-2xl">Please Resister</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    name="name"
                    className="mb-2 py-2 px-4 w-full"
                    placeholder="Full Name"
                    required
                />

                <input
                    type="email"
                    name="email"
                    className="mb-2 py-2 px-4 w-full"
                    placeholder="Email"
                    required
                />

                <div className="mb-2 relative flex items-center">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="py-2 px-4 w-full"
                        placeholder="Password"
                        required
                    />
                    <span className="absolute right-0 mr-4" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                </div>

                <div className="mb-2 flex justify-center gap-2">
                    <input type="checkbox" name="terms" />
                    <label htmlFor="terms"><a href="#">Accept out terms and conditions.</a></label>
                </div>

                <input type="submit" value="Register" className="btn" />
            </form>

            {/* Error message */}
            {
                success && <p className="text-green-500">{success}</p>
            }
            {
                error && <p className="text-red-500">{error}</p>
            }
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;