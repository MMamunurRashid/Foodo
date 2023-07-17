import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

import { useForm } from "react-hook-form";
const UpdatePhoto = () => {

    const {  updateUserProfile } = useContext(AuthContext);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();


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
        <div className='pt-36'>
            <h1>Upload your new profile picture</h1>
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
        </div>
    );
};

export default UpdatePhoto;