import React, { useContext } from 'react';
import img from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
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
                            <form onSubmit={handleSingUp} className="card-body">
                                <h1 className='text-center text-3xl font-bold mb-10'>Sign Up</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                                </div>
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
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary text-white" type="submit" value="Sing Up" />
                                </div>
                                <div>
                                    <h1 className='text-center'>Already have an account? <Link to="/login" className='text-primary'>Login</Link></h1>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;