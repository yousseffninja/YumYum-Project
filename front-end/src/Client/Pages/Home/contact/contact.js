import React from 'react';
import style from "./contact.module.css"
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
    return (
        <div className={style.contact + " " + style.section } id="contact">
            <div className = {style.left}>
                <img src="/images/message.png" alt="message" />
            </div>
            <div className = {style.right}>
                <h2>Contact</h2>
                <form >
                <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                    <textarea placeholder="Massage" cols="30" rows="10"></textarea>
                    <Button>Send</Button>
                </form>
            </div>
        </div>
    );
}
