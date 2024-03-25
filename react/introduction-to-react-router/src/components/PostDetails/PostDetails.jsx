import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, body} = post;
    const {postId} = useParams();
    console.log(postId);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>{id}</h2>
            <p>{body}</p>
            <div>
                <button onClick={handleGoBack}>Go back</button>
            </div>
        </div>
    );
};

export default PostDetails;