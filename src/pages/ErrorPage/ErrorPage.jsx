import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <p>Error 404!</p>
            <p>Page is not found</p>
            <br></br>
            
            <Link to='/' className="text-green-600 bg-green-200 font-bold text-2xl rounded-md px-36 py-12 border">Go back home</Link>
        </div>
    );
};

export default ErrorPage;