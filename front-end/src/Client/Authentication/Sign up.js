
import { Component } from "react";
import { Container } from "react-bootstrap";
import style from './Login.module.css'


export default class SignUp extends Component {
    render(){
        return(
            <Container>
            <form  className={style.form} action=''>
                <h1 className={style.h1}>Sign Up</h1>
                <div className="form-groub">
                <label className={style.label}>First Name</label>
                <input type="text" className={style.input + " form-control"} placeholder="First Name" name='Fullname'/>
            </div>
            <div className="form-groub">
                <label className={style.label}>Last Name</label>
                <input type="text" className={style.input + " form-control"} placeholder="Last Name" name='username'/>
            </div>
            <div className="form-groub">
                <label className={style.label}>Email</label>
                <input type="text" className={style.input + " form-control"} placeholder="Email" name='email'/>
            </div>
            <div className="form-groub">
                <label className={style.label}>Password</label>
                <input type="password" className={style.input + " form-control"} placeholder="Password" name='password'/>
                </div>
                <div className="form-groub">
                <label className={style.label}>Confirm Password</label>
                <input type="password" className={style.input + " form-control"} placeholder="Confirm Password" name='com'/>
                </div>
                <button className={"btn-primary btn-block " + style.btn}>Sign Up</button>
            </form>
            </Container>
        )}
}