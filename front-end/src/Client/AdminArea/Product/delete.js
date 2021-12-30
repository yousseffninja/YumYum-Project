import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import {DeleteProductContext} from "./DeleteProductApi";
import style from "../../Authentication/Login.module.css";

function Delete() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {deleteProductApi, deleteProduct} = useContext(DeleteProductContext);
  const onSubmit = (data) => {
      console.log(data)
      deleteProductApi(data.product_id);
  };
  console.log(errors);

    if(deleteProduct){
        window.location.href = "/";
    }

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={style.h1}>Delete Product</h1>

      <div className="form-groub">
        <label className={style.label}>Product-id</label>
        <input
          type="text"
          placeholder="Product-id"
          className={style.input}
          {...register("product_id", {})}
        />
      </div>

      <input className={"btn-primary btn-block " + style.btn} type="submit" />
    </form>
  );
}

export default Delete;
