import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = UseAuth();

  const handleLoging = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-24">
      <h3 className="text-3xl">Welcome Back</h3>
      <p>Please Log In</p>
      <form onSubmit={handleSubmit(handleLoging)}>
        <fieldset className="fieldset">
          <label className="label text-2xl">Email</label>
          <input
            type="email"
            className="input text-xl"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          <label className="label text-2xl">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            className="input text-xl"
            placeholder="Password"
          />
          {errors.password?.type === "required   "}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>
          New to Delivery service{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
