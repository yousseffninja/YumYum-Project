import React, {useContext} from 'react'
import { useForm } from 'react-hook-form';
import {UpdateCategoryContext} from "./UpdateCategoryApi";
import { Button ,Form } from 'react-bootstrap';
import style from "../../Authentication/Login.module.css"

function UpdateCategory() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {updateCategoryApi, updateCategory} = useContext(UpdateCategoryContext)
    const onSubmit = data => {
        console.log(data)
        updateCategoryApi(data.category_id, data.name)
    };
    console.log(errors);
    
    return (
      
      <div className='con-conta'>
        <Form className={style.form}  onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={style.label} >Category-id</Form.Label>
          <Form.Control type="text" placeholder="Name Category" {...register("category_id", {required: true, maxLength: 80})}/>
         </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={style.label} >New Name</Form.Label>
          <Form.Control type="text" placeholder="Name Category" {...register("name", {required: true, maxLength: 80})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        </Form.Group>
        <a href="/"><Button className={"btn-primary btn-block " + style.btn} type="submit">
          Submit
        </Button></a>
      </Form>
            </div>
    )
}

export default UpdateCategory

