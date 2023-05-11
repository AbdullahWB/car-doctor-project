import React, { useContext } from 'react';
import img from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleSingIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-[calc(100vh-80px)]">
                <div className="hero-content grid grid-cols-2 gap-8">
                    <div className="text-center lg:text-left">
                        <img className='w-auto h-auto' src={img} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSingIn} className="card-body">
                            <h1 className='text-center text-3xl font-bold mb-10'>Sign Up</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary text-white" type="submit" value="Sing Up" />
                                </div>
                                <div>
                                    <h1 className='text-center'>Already have an account? <Link to="/register" className='text-primary'>Register</Link></h1>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;