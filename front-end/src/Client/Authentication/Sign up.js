import React, { Component, useContext } from "react";
import { Container } from "react-bootstrap";
import  { useForm } from "react-hook-form";
import  {SignUpContext} from "./signUpApi";
import style from './Login.module.css'


export default  function SignUp(){
    const {register ,handleSubmit, formState: {errors}} = useForm();
    const {signUpApi, signUp} = useContext(SignUpContext);
    const onSubmit = (data) => {
        console.log(data);
      signUpApi(data.name, data.email, data.password);
        console.log(data)
    };
    console.log(errors)
    if(signUp){
        window.location.href = "/";
    }
    return(
        <Container>
        <form  className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={style.h1}>Sign Up</h1>
            <div className="form-groub">
            <label className={style.label}>First Name</label>
            <input type="text" className={style.input + " form-control"} placeholder="First Name" name='Fullname'/>
        </div>
        <div className="form-groub">
            <label className={style.label}>Last Name</label>
            <input type="text" className={style.input + " form-control"} placeholder="Last Name" name='name' {...register("name", {required: true, maxLength: 80})} />
        </div>
        <div className="form-groub">
            <label className={style.label}>Email</label>
            <input type="text" className={style.input + " form-control"} placeholder="Email" name='email' {...register("email", {required: true, max: 20, min: 5})} />
        </div>
        <div className="form-groub">
            <label className={style.label}>Password</label>
            <input type="password" className={style.input + " form-control"} placeholder="Password" name='password' {...register("password", {required: true})} />
            </div>
            <div className="form-groub">
            <label className={style.label}>Confirm Password</label>
            <input type="password" className={style.input + " form-control"} placeholder="Confirm Password" name='com'/>
            </div>
           <a href="/"> <button className={"btn-primary btn-block " + style.btn}>Sign Up</button></a>
        </form>
        </Container>
    );
}