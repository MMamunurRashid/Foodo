import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { BounceLoader } from "react-spinners";

const AddItem = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const navigation = useNavigation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // is loading
  const [preloader, setPreLoader] = useState(false);
  useEffect(() => {
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 2000);
  }, []);
  if (navigation.state === "loading") {
    return (
      <div>
        {preloader ? (
          <div className="flex justify-center items-center w-full h-screen">
            <BounceLoader
              color="#d63636"
              cssOverride={{}}
              loading
              size={150}
              speedMultiplier={1}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }

  const imgbbKey = "035fa433d4769de53906a7872698cbac";

  const handleAddProduct = (data) => {
    const img = data.itemPhoto[0];
    // console.log(productPhoto);
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            postDate: new Date(),
            nameOfPoster: user.displayName,
            emailOfPoster: user.email,
            img: imgData.data.url,
            title: data.itemName,
            price: data.price,
          };
          // save  information to the database
          fetch("https://foodo-server.vercel.app/menu/admin", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              toast.success(`Item added successfully !!!`);
              navigate("/dashboard/all-menu");
            });
        }
      });
  };

  return (
    <div className="mb-10 ">
      <h1 className="text-5xl font-serif font-bold">Add A Item To the Menu</h1>
      <form onSubmit={handleSubmit(handleAddProduct)} className=" mt-10 mx-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              required
              {...register("itemName", {
                required: "Product Name is Required",
              })}
              type="text"
              placeholder="Product Name"
              className="input w-full input-bordered"
            />
            {errors.itemName && (
              <p className="text-red-500">{errors.itemName.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              required
              {...register("price", {
                required: "Price is Required",
              })}
              type="text"
              placeholder="Price"
              className="input w-full input-bordered"
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Upload your product photo</span>
            </label>
            <input
              type="file"
              {...register("itemPhoto", {
                required: "Item Photo is Required",
              })}
              className="input input-bordered w-full"
              required
            />
            {errors.itemPhoto && (
              <p className="text-red-500">{errors.itemPhoto.message}</p>
            )}
          </div>
        </div>
        <br />
        <div className="w-1/2 m-auto">
          <input
            required
            className="btn btn-accent w-full"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
