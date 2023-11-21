
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (
        <div className="not-found-page  mx-20">
            <div className='text-center'>
                <h1 className='text-2xl my-6 text-red-600'>Oops! Page not found.</h1>
                <img className="w-1/3 mx-auto" src="https://i.ibb.co/2cGyFzj/romson-preechawit-Vy2c-Hqm0m-Cs-unsplash.jpg" alt="404 error" />
                <p className='text-lg text-green-600 my-5'>We could not find any page that you were looking for. Please, check the URL and try again.</p>
                <Link className='link link-success' to="/">Go back to home page</Link>
            </div>
        </div>
    );
};

export default PageNotFound;
