import React, {useContext} from 'react'
import { useForm } from 'react-hook-form';
import {CreateCategoryContext} from "./CreateCategoryApi";
import { Button ,Form } from 'react-bootstrap';
import style from "../../Authentication/Login.module.css"


function CreateCategory() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createCategoryApi, createCategory} = useContext(CreateCategoryContext)
    const onSubmit = data => {
        console.log(data);
        createCategoryApi(data.name);
    };
    console.log(errors);

    if(createCategory){
        window.location.href = "/";
    }
    
    return (<div className='con-conta'>
       <Form className={style.form}onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={style.label} >Name</Form.Label>
          <Form.Control type="text" placeholder="Name Category" {...register("name", {required: true, maxLength: 80})}/>

        </Form.Group>
        <a href="/"><Button className={"btn-primary btn-block " + style.btn} type="submit">
          Submit
        </Button></a>
      </Form>
      </div>
    )
}

export default CreateCategory;

