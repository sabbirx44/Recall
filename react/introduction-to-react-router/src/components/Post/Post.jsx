import PropTypes from 'prop-types';
import './Post.css';
import { useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();
    const handlePostDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h4>{id}</h4>
            <p style={{ flexGrow: 1 }}>{title}</p>
            <div>
                <button onClick={handlePostDetails}>Post Details</button>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

export default Post;