import React from "react";
import { useForm } from "react-hook-form";
import style from "../Authentication/Login.module.css";
import {Button} from "react-bootstrap";

function Cart() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={style.h1}>Cart Page</h1>

      <div className="form-groub">
        <label className={style.label}>Address</label>
        <input
          type="text"
          className={style.input}
          placeholder="Address"
          {...register("Address", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div className="form-groub">
        <label className={style.label}>Number</label>
        <input
          type="number"
          className={style.input}
          placeholder="number of meal"
        />
      </div>
      <div className="form-groub">
        <input type="radio" id="html" name="fav_language" value="credit" />
        <label for="html">Credit</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="cash" />
        <label for="css">Cash</label>
        <br />
          <a href="/"><Button >Submit</Button></a>
      </div>
    </form>
  );
}

export default Cart;
