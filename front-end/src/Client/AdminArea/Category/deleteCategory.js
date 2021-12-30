import React, {useContext} from 'react'
import { useForm } from 'react-hook-form';
import {DeleteCategoryContext} from "./DeleteCategoryApi";
import { Button ,Form } from 'react-bootstrap';
import style from "../../Authentication/Login.module.css"



function DeleteCategory() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {deleteCategoryApi, deleteCategory} = useContext(DeleteCategoryContext);
    const onSubmit = data => {
        console.log(data)
        deleteCategoryApi(data.category_id);
    };
    console.log(errors);

    if(deleteCategory){
        window.location.href = "/";
    }
    
    return (<div className='con-conta'>
      <Form  className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={style.label} {...register("category_id", {required: true, maxLength: 80})}>Category-id</Form.Label>
        <Form.Control type="text" placeholder="Name Category" {...register("category_id", {required: true, maxLength: 80})} />
        
      </Form.Group>
      <a href="/"><Button className={"btn-primary btn-block " + style.btn} type="submit">
          Submit
        </Button></a>
    </Form>
</div>
    )
}

export default DeleteCategory

