import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Login = () => {

    const { login } = useContext(AuthContext);

    // for redirect when we try to log in from read more
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        console.log(form.get('email'))

        // sign in
        const email = form.get('email');
        const password = form.get('password');
        login(email, password)
            .then(userCredential => {
                console.log(userCredential.user)

                // navigate after log in
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error(error)
            });
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

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

                        {/*       Form            */}
                        <form onSubmit={handleLogin} className="card-body">

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-teal-800">Email Address</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-md  bg-gray-100" required />
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-teal-800">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered rounded-md bg-gray-100" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-gray-800">Login</button>
                            </div>
                            <p className="font-bold text-sm">
                                Do Not Have An Account ?<Link to={'/register'}><span className="text-orange-400"> Register</span></Link>
                            </p>
                            <p>
                                
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;