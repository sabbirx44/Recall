import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid chartreuse',
        borderRadius: '16px',
        padding: '16px',
    };

    return (
        <div style={userStyle}>
           <h2>{name}</h2>
           <p>Email: {email}</p>
           <p>Phone: {phone}</p>
           <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default User;