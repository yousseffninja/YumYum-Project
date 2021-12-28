import React , {Component} from "react";
import {Card ,Button, Container } from 'react-bootstrap';
import style from './Item-Container.module.css';

export default class Item extends Component{
    render(){
        return(
              <Container className={style.container }>
        <Card style={{ width: '20rem' }} className={style.card}>
  <Card.Img variant="top" src={this.props.img} className={style.img} />
  <Card.Body className={style.cardbody}>
    <Card.Title className={style.title + " " + style.cardtitle} >{this.props.title}</Card.Title>
    <Card.Text className={style.cardtext}>
      {this.props.desc}
    </Card.Text>
    <div className={style.priccon}>
    <a href={"/Order/" + this.props.id}><Button className={style.btn} variant="/Order">Order </Button></a>    
    <span variant="primary " >{this.props.price} </span>
</div>
  </Card.Body>
</Card>
</Container>
        )
    }
}