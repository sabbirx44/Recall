import PropTypes from 'prop-types';


const ReusableForm = ({ handleSubmit, submitBtnText = 'Submit', children }) => {
    // formTitle (prop)
    // const handleSubmit = e => {
    //     e.preventDefault();
    // } (Cut this)

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            {/* <h2>{formTitle}</h2> */}
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

ReusableForm.propTypes = {
    formTitle: PropTypes.string, // validate formTitle as string
    handleSubmit: PropTypes.func.isRequired, // validate handleSubmit as function and required
    submitBtnText: PropTypes.string, // validate submitBtnText as string
    children: PropTypes.node // validate children as a React node
};

export default ReusableForm;