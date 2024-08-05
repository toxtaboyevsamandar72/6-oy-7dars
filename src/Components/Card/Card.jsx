

import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card(porps) {
  const { image, name, id, oldPrice, newPrice, comments, category } =
    porps.data;

  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`products/${id}`);
  }

  return (
    <div className="card" onClick={handleNavigate}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>Front Side</p>
          </div>
          <div className="card-back">
            <div className="wrap">
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <img className="img" src={image} alt="" />
                <b style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Id: {id}</h5>
                  <h2> Name: {name}</h2>
                  <b>
                    <h3>newPrice: {newPrice}</h3>
                    <h3> oldPrice: {oldPrice}</h3>
                  </b>
                </b>
              </div>
              <h2 className="comments">Comments: {comments}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
