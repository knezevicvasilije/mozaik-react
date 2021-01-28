import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Card() {
  return (
    <div className="cards">
      <h1>Nasi poslednji projekti</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/virtuelniAsistent.png"
              text="Virtuelni asistent je projekat koji će kroz edukaciju o korišćenjem
              digitalnih tehnologija...
              "
              label="Virtuelni Asistent"
              path="/services"
            />
            <CardItem
              src="images/virtuelniAsistent.png"
              text="Virtuelni asistent je projekat koji će kroz edukaciju o korišćenjem
              digitalnih tehnologija...
              "
              label="Virtuelni Asistent"
              path="/services"
            />
            <CardItem
              src="images/virtuelniAsistent.png"
              text="Virtuelni asistent je projekat koji će kroz edukaciju o korišćenjem
              digitalnih tehnologija...
              "
              label="Virtuelni Asistent"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
