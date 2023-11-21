import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {

    const { login, googleSignIn, gitHubSign } = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState('');

    const [success, setSuccess] = useState('');


    // for redirect when we try to log in from read more
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        console.log(form.get('email'))

        setErrorMessage('');
        setSuccess('');

        // sign in
        const email = form.get('email');
        const password = form.get('password');
        login(email, password)
            .then(userCredential => {
                console.log(userCredential.user)
                setSuccess(true)


                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                setErrorMessage(error.message);
                console.error(error)
            });


    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);




    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log('error: ', error.message)
            })
    }

    const handleGitHubSignIn = () => {
        gitHubSign()
            .then(() => {
                // console.log(user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>

            {/* Log in form */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-teal-800">Login in your account</h1>
                        <hr className="border-2 mt-12  border-teal-600" />

                    </div>
                    <div className="card shrink-0 w-full max-w-sm" data-aos="zoom-out">
                        <p className="font-bold text-sm">
                            Do Not Have An Account ?<Link to={'/register'}><span className="text-orange-400"> Register</span></Link>
                        </p>

                        {/*       Form            */}
                        <form onSubmit={handleLogin} className="card-body">

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-teal-800">Email Address</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-md  bg-gray-100" />
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-teal-800">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered rounded-md bg-gray-100" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-gray-800">Login</button>
                            </div>

                            {errorMessage && (
                                <p className="text-sm font-bold text-red-500">
                                    {errorMessage}
                                </p>
                            )}

                            {success && (

                                <div className="toast toast-top toast-center">
                                    <div className="alert alert-success text-sm font-bold text-green-500">
                                        <span>Login successfully.</span>
                                    </div>
                                </div>
                            )}

                            <p>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full">
                                    <FaGoogle></FaGoogle> sign in with Google
                                </button>
                            </p>
                            <p>
                                <button onClick={handleGitHubSignIn} className="btn btn-outline btn-info w-full">
                                    <FaGithub></FaGithub> sign in with GitHub
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;