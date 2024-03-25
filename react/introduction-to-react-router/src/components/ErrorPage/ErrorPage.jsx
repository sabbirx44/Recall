import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Oops!</h1>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <Link to={'/'}><button>Go back to home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;