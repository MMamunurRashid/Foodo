import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

import { BounceLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, loading, updateUserProfile } = useContext(AuthContext);
  console.log(user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // if loading
  if (loading) {
    return (
      <BounceLoader
        color="#d63636"
        cssOverride={{}}
        loading
        size={150}
        speedMultiplier={1}
      />
    );
  }

  // Upload Image
  const imgbbKey = "035fa433d4769de53906a7872698cbac";
  const handleAddProfilePhoto = (data) => {
    const productPhoto = data.productPhoto[0];
    // console.log(productPhoto);
    const formData = new FormData();
    formData.append("image", productPhoto);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const profilePhoto = {
            photoURL: imgData.data.url,
          };
          updateUserProfile(profilePhoto)
            .then(() => {})
            .catch((error) => {
              console.error(error);
            });
        }
      });
  };
  return (
    <div className="pt-20">
      <h1 className="text-5xl">Profile</h1>
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <p>{user?.emailVerified ? "Email Verified" : "Email Not Verified"}</p>
      {user?.photoURL ? (
        <>
          <img src={user?.photoURL} alt="" />
          <p>
            want to change your profile picture?{" "}
            <Link to="/updatePhoto" className="text-red-500">
              Upload New Photo
            </Link>
          </p>
        </>
      ) : (
        <>
          {/*  User input photo */}
          <form onSubmit={handleSubmit(handleAddProfilePhoto)}>
            <input
              type="file"
              {...register("productPhoto", {
                required: "Product Photo is Required",
              })}
              className="input input-bordered w-full"
              required
            />
            <input
              className="btn btn-accent w-full"
              value="Submit"
              type="submit"
            />
          </form>
        </>
      )}
      <p>Phone Number: {user?.phoneNumber}</p>
    </div>
  );
};

export default Profile;
