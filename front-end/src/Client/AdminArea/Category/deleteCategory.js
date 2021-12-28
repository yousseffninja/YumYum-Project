import React from 'react'
import { useForm } from 'react-hook-form';
import { Button ,Form } from 'react-bootstrap';

import './Category.css';


function DeleteCategory() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (<div className='con-conta'>
      <Form  className='form2' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label {...register("Category", {required: true, pattern: /^\S+@\S+$/i})}>Name</Form.Label>
        <Form.Control type="email" placeholder="Name Category" />
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>
    )
}

export default DeleteCategory

