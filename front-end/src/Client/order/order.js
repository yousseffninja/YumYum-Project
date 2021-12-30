import React, { useState, useEffect } from "react";
import { getById } from "../OrderApi/OrderApi";

import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './order.css';

export default function Order() {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getById(parseInt(id)).then((menu) => {
      setMenu(menu);
      setLoading(false);
    });
  }, [id]);

  if (loading) return "Loading ..";

  return (
    <div className="container-order">
      <div className={"row"}>
        <div className="col-6">
          <Card.Img variant="top" src={menu.img} height="400px"  />
        </div>
        <div className="col-6 btnpar">
          <h1>{menu.title}</h1>
          <p>{menu.desc}</p>
          <p>Price: {menu.price}</p>

          <a href="/Cart"><button className="btn-card"  >Add to Cart</button></a>
        </div>
      </div>
    </div>
  );
}
