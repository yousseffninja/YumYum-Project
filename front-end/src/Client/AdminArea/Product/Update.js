import React from "react";
import { useForm } from "react-hook-form";
import style from "../../Authentication/Login.module.css";

function Update() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={style.h1}>Update Product</h1>

      <div className="form-groub">
        <label className={style.label}>Product-id</label>
        <input
          type="number"
          className={style.input}
          placeholder="Product-id"
          {...register("Product-id", {})}
        />
      </div>
      <div className="form-groub">
        <label className={style.label}>Title</label>
        <input
          type="text"
          className={style.input}
          placeholder="Title"
          {...register("Title", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div className="form-groub">
        <label className={style.label}>Desc</label>
        <textarea
          type="text"
          placeholder="Desc"
          className={style.textarea}
          {...register("desc", { required: true, pattern: /^\S+@\S+$/i })}
        ></textarea>
      </div>
      <div className="form-groub">
        <label className={style.label}>Price</label>
        <input
          type="number"
          className={style.input}
          placeholder="Price"
          {...register("Price", {})}
        />
        <label>Image</label>

        <input type="file" className={style.input} placeholder="File" />
        <label className={style.label}>Category</label>

        <input
          type="text"
          className={style.input}
          placeholder="Category"
          {...register("Category", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <input className={"btn-primary btn-block " + style.btn} type="submit" />
    </form>
  );
}

export default Update;
