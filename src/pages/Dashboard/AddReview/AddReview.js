import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log("form submitted");
    axios
      .post("https://shrouded-reaches-47606.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Add review successfully");
          reset();
        }
      });
  };
  return (
    <div className="container ">
      <div className="row d-flex flex-column align-items-center justify-content-center">
        <div className="col-md-6">
          <h1 className="text-danger fw-bold text-center mt-5 mb-4">
            Add a Review
          </h1>
          <hr className="w-50 m-auto mb-5" />
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-8">
              <input
                className="form-control"
                placeholder="name"
                value={user?.displayName}
                type="text"
                {...register("name", { required: true })}
              />
            </div>
            <div className="col-4">
              <input
                className="form-control"
                placeholder="Your Rating"
                type="number"
                min="1"
                max="5"
                {...register("rating", { required: true })}
              />
            </div>

            <div className="col-12">
              <textarea
                className="form-control"
                placeholder="Your Review"
                {...register("description", { required: true })}
              />
            </div>

            <div className="col-md-12">
              <input
                className="form-control"
                placeholder="photo URL"
                value={
                  user?.photoURL ||
                  "https://cdn.iconscout.com/icon/free/png-256/boy-avatar-4-1129037.png"
                }
                type="text"
                {...register("photoURL", { required: true })}
              />
            </div>

            <input
              type="submit"
              className="btn btn-danger"
              value="Add Review"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
