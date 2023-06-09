// import { Container } from "@mui/material";
import React, { useState } from "react";
import styles from "./Reviews.module.css";
import CardsForCompony from "../cardsForCompony/CardsForCompony";
import CardsForDesign from "../cardsForDesign/CardsForDesign";

const Reviews = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Js", body: "Description" },
    { id: 1, title: "Js", body: "Description" },
    { id: 1, title: "Js", body: "Description" },
    { id: 1, title: "Js", body: "Description" },
  ]);
  return (
    <div className={styles.reviewsPage}>
      <h1 className={styles.myReviewstext}>Мои отзывы</h1>
      <container>
        <div>
          <div className={styles.reviewsForCompany}>
            <h3>отзывы на компанию</h3>
            <p>123</p>
          </div>
          <div className={styles.block_forSlider}>
            {cards.map((card) => (
              <CardsForCompony card={card} key={card.id} />
            ))}
          </div>
        </div>
        <div>
          <div>
            <h3>отзывы на дизайнера</h3>
            <p>123</p>
          </div>
          <div className={styles.block_forSlider}>
            {cards.map((card) => (
              <CardsForDesign card={card} key={card.id} />
            ))}
          </div>
        </div>
      </container>
    </div>
  );
};

export default Reviews;
