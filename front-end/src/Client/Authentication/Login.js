import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import style from './Login.module.css'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <Container >
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                      <h1 className={style.h1}>Login</h1>

         <div className="form-groub">
                <label className={style.label}>Email</label>
      <input type="text" className={style.input} placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      </div>
      <div className="form-groub">
                <label className={style.label}>Password</label>
                      <input type="password" className={style.input} placeholder="password" {...register("password", {required: true, min: 8})} />
                      </div>
                      <input className={"btn-primary btn-block " + style.btn} type="submit" />
                <a href='/SignUp' className={style.lin}>If you dont have account create one.</a>
    
    </form>
    </Container>
  );
}