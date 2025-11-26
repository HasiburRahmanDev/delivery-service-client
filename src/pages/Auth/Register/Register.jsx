import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = UseAuth();

  const handleRegistration = (data) => {
    console.log("after register", data);
    const profileImage = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        // store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImage);
        const img_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(img_API_URL, formData).then((res) => {
          console.log("after image upload", res.data.data.url);
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated done");
            })
            .catch((error) => {
              console.log(error);
            });
        });
        // update user profile here
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-24">
      <h3 className="text-3xl">Create an Account </h3>
      <p>Register with our service</p>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* Name field  */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}
          {/* Photo Field  */}
          <label className="label">Photo</label>
          <input
            type="file"
            className="file-input"
            placeholder="Your Photo"
            {...register("photo", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Photo is required</p>
          )}

          {/* email field  */}
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
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
