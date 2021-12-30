import React, {useContext, useEffect} from "react";
import { useForm } from "react-hook-form";
import { UpdateProductContext} from "./UpdateProductApi";
import style from "../../Authentication/Login.module.css";

function Update() {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const {updateProductApi, updateCategory} = useContext(UpdateProductContext);
  const onSubmit = (data) =>{
      console.log(data);
      //_id
      updateProductApi(data.product_id, data.title, data.price, data.description, data.images, data.category)
  } ;
  console.log(errors);

  return (
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={style.h1}>Update Product</h1>

          <div className="form-groub">
              <label className={style.label}>Product-id</label>
              <input
                  type="text"
                  className={style.input}
                  placeholder="Product-id"
                  {...register("product_id", {})}
              />
          </div>
          <div className="form-groub">
              <label className={style.label}>Title</label>
              <input
                  type="text"
                  className={style.input}
                  placeholder="Title"
                  {...register("title", {})}
              />
          </div>
          <div className="form-groub">
              <label className={style.label}>Desc</label>
              <textarea
                  type="text"
                  placeholder="Desc"
                  className={style.textarea}
                  {...register("description", {})}
              ></textarea>
          </div>
          <div className="form-groub">
              <label className={style.label}>Price</label>
              <input
                  type="number"
                  className={style.input}
                  placeholder="Price"
                  {...register("price", {})}
              />
              <label className={style.label}>Image</label>

              <input type="file" className={style.input} placeholder="File" {...register("images", {})} />
              <label className={style.label}>Category</label>

              <input
                  type="text"
                  className={style.input}
                  placeholder="Category"
                  {...register("category", {})}
              />
          </div>
          <input className={"btn-primary btn-block " + style.btn} type="submit" />
      </form>
  );
}

export default Update;
