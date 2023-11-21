import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password')
        console.log(email, name)

        createUser(email, password)
            .then(userCredential => {
                console.log(userCredential.user)
            })
            .catch(error => {
                console.error(error)
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