import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Register = () => {

    const navigate = useNavigate();

    const { createUser, googleSignIn, gitHubSign  } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState("");

    const [success, setSuccess] = useState("");

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;

        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password')
        console.log(email, name)

        setErrorMessage('');
        setSuccess('');

        if (password.length < 6) {
            setErrorMessage(
                "Password must be 6 characters long (auth/weak-password)."
            );
            return;
        }
        
        else if (!passRegex.test(password)) {
            setErrorMessage(
                "password must contain at least one UPPER case, one LOWER case & one SPECIAL char."
            );
            return;
        }

        createUser(email, password)
            .then(userCredential => {
                console.log(userCredential.user)

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setErrorMessage(error.message)
                console.error(error)
            })
    }

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

            {/* Register form */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-teal-800">Register your account</h1>
                        <hr className="border-2 mt-12  border-teal-600" />
                    </div>

                    <div className="card shrink-0 w-full max-w-sm">

                        {/*       Form            */}
                        <form onSubmit={handleRegister} className="card-body">

                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-teal-800">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered rounded-md  bg-green-100" required />
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-teal-800">Email Address</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-md  bg-green-100" required />
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-green-700">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered rounded-md bg-green-100" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-teal-800 text-white">Register</button>
                            </div>
                            {errorMessage && (
                                <p className="text-sm font-bold text-red-500">
                                    {errorMessage}
                                </p>
                            )}

                            {success && (
                                <p className="text-sm font-bold text-green-500">{success}</p>
                            )}

                            <p>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full">
                                    <FaGoogle></FaGoogle> Register with Google
                                </button>
                            </p>
                            <p>
                                <button onClick={handleGitHubSignIn} className="btn btn-outline btn-info w-full">
                                    <FaGithub></FaGithub> Register with GitHub
                                </button>
                            </p>

                            <p className="font-bold text-sm">
                                Already Have An Account ?<Link to={'/login'}><span className="text-violet-700"> Login</span></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;