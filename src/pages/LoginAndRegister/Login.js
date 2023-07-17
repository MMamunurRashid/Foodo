import React from 'react';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginUserEmail, setLoginUserEmail] = useState("");
 
  const [loginError, setLoginError] = useState("");
  



  const handleLogin = (data) => {
    // console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(data.email);
        toast.success("Login Successful");
        //console.log(user);
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center ">
    <div className="w-96 p-7">
      <h2 className="text-xl sm:text-5xl text-center">Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs bg-slate-100">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email Address is required",
            })}
            required
            className="input input-bordered w-full max-w-xs bg-slate-100"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs bg-slate-100">
          <label className="label">
            {" "}
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters or longer",
              },
            })}
            className="input input-bordered w-full max-w-xs bg-slate-100"
          />{" "}
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
          <label className="label">
            <span className="label-text">Forget Password?</span>
          </label>
        </div>
        <input
          className="btn btn-accent w-full"
          value="Login"
          type="submit"
        />
        <div>
          {loginError && <p className="text-red-600">{loginError}</p>}
        </div>
      </form>
      <p>
        New at Recycle Clothes?
        <Link className="text-secondary hover:text-accent" to="/register">
          Create new Account
        </Link>
      </p>
      <div className="divider">OR</div>
      <Link to="/sign-up">
        <button className="btn btn-outline w-full">
          <FcGoogle className="w-8 h-8 mr-3" /> CONTINUE WITH GOOGLE
        </button>
      </Link>
    </div>
  </div>
  );
};

export default Login;

