import React, { Component } from "react";
import {
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import  "./Admin-area.css";

export default class Adminarea extends Component {
  render() {
    return (
      <div className='container-admin'>
      <Dropdown className='dropdown1 btn6'>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Category
        </Dropdown.Toggle>
    
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="/DeleteCategory">Delete Category</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/UpdateCategory">Update Category</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/CreateCategory">Create Category</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Product"
        className="mt-2 dropdown1 btn6"
      >
        
        <Dropdown.Item href="/DeleteProduct">Delete Product</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/UpdateProduct">Update Product</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/CreateProduct">Create Product</Dropdown.Item>
      </DropdownButton>

      <Button 
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Get Users"
        className="mt-2 dropdowm1 btn2"
      >
        Get Users
        
      </Button>
    </div>
    );
  }
}
