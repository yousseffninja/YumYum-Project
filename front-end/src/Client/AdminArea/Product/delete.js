import React from "react";
import { useForm } from "react-hook-form";
import style from "../../Authentication/Login.module.css";

function Delete() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={style.h1}>Delete Product</h1>

      <div className="form-groub">
        <label className={style.label}>Product-id</label>
        <input
          type="number"
          placeholder="Product-id"
          className={style.input}
          {...register("Product-id", {})}
        />
      </div>

      <input className={"btn-primary btn-block " + style.btn} type="submit" />
    </form>
  );
}

export default Delete;
