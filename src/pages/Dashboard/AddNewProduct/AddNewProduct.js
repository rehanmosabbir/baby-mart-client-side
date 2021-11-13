import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log("form submitted");
    axios
      .post("https://shrouded-reaches-47606.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Add product successfully");
          reset();
        }
      });
  };
  return (
    <div className="container ">
      <div className="row d-flex flex-column align-items-center justify-content-center">
        <div className="col-md-6">
          <h1 className="text-dark fw-bold text-center mt-5 mb-4">
            Add a new Product
          </h1>
          <hr className="w-50 m-auto mb-5" />
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-12">
              <input
                className="form-control"
                placeholder="Product Name"
                type="text"
                {...register("productName", { required: true })}
              />
            </div>

            <div className="col-12">
              <textarea
                className="form-control"
                placeholder="Product Description"
                {...register("description", { required: true })}
              />
            </div>

            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="price in US dollar"
                type="number"
                {...register("price", { required: true })}
              />
            </div>

            <div className="col-md-8">
              <input
                className="form-control"
                placeholder="image URL"
                type="text"
                {...register("img", { required: true })}
              />
            </div>

            <input
              type="submit"
              className="btn btn-danger"
              value="Add Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
