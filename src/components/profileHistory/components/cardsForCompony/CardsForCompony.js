import React from "react";
import styles from "./CardsForCompany.module.css";
import image from "../../../../assets/images/ProfileHistory/images/image.png";
import burger from "../../../../assets/images/ProfileHistory/images/burger.svg";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const CardsForCompony = ({ card }) => {
  return (
    <div>
      <div className={styles.cards}>
        <div className={styles.publishedText}>
          <div>
            <h4>Опубликовано 18 часов назад</h4>
          </div>
          <div>
            <img src={burger} />
          </div>
        </div>
        <div>
          <img src={image} />
        </div>
        <div>
          <div>
            <h4>{card.title}</h4>
          </div>

          <div>
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
          <div>
            <span className={styles.commmentOpacity}>
              Я очень доволен дизайном этой компании , все сделано очень
              качественно
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsForCompony;
