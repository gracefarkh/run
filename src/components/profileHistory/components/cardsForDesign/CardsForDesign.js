import React from "react";
import styles from "./CardsForDesign.module.css";
import burger from "../../../../assets/images/ProfileHistory/images/burger.svg";
import photoOfDesiner from "../../../../assets/images/ProfileHistory/images/photoOfDesigner.svg";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const CardsForDesign = ({card}) => {
  return (
    <div>
      <div className={styles.cardsForDesign}>
        <div className={styles.publishedText}>
          <div>
            <h4>Опубликовано 18 часов назад</h4>
          </div>
          <div>
            <img src={burger} />
          </div>
        </div>
        <div>
          <div className={styles.bordered_block}>
            <img src={photoOfDesiner} />
            <div>
              <h4>{card.title}</h4>
              <p>дизайнер интерьера</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h6>Андрей Нешменов</h6>
          </div>
          <div>
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
          <div>
            <span>
              Я очень доволен дизайном этой компании , все сделано очень
              качественно
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsForDesign;
