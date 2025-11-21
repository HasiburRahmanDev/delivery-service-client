import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log("after register", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">please type correct email</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password?.type === "required" && <p>password required</p>}
          {errors.password?.type === "minLength" && (
            <p>Password should be 6 digits or more</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
