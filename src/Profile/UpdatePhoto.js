import React from "react";

import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const UpdatePhoto = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Upload Image
  const imgbbKey = "035fa433d4769de53906a7872698cbac";
  const handleAddProfile = (data) => {
    const profilePhoto = data.productPhoto[0];

    // console.log(productPhoto);
    const formData = new FormData();
    formData.append("image", profilePhoto);
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
          toast.success("Your profile picture changed successfully.");
          navigate("/dashboard/profile");
        }
      });
  };
  return (
    <div className="pt-36 px-10 ">
      <form onSubmit={handleSubmit(handleAddProfile)}>
        <h1>Upload your new profile picture</h1>
        <input
          type="file"
          {...register("profilePhoto", {
            required: "Profile Photo is Required",
          })}
          className="input input-bordered w-2/4"
          required
        />
        {errors.profilePhoto && (
          <p className="text-red-500">{errors.profilePhoto.message}</p>
        )}

        <input
          className="btn btn-accent w-2/4 block my-5 justify-center"
          value="Submit"
          type="submit"
        />
      </form>
    </div>
  );
};

export default UpdatePhoto;
