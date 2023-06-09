import React from "react";

import pochta from ".././../../../assets/images/ProfileHistory/images/pochta.svg";
import password from ".././../../../assets/images/ProfileHistory/images/password.svg";
import profile from '.././../../../assets/images/ProfileHistory/images/profile.svg'
import { useSelector, useDispatch } from "react-redux";
import styles from "./Data.module.css";

import { editBtnRd } from "../../../../store/slices/profileHistorySlice";

const Data = () => {
  const dispatch = useDispatch();
  const { edit } = useSelector((state) => state.profileHistoryReducer);


  const editFn = ()=>{
    dispatch(editBtnRd)
  }
  return (
    <div>
      <div className={styles.data}>
        <div className="main_info">
          <div className={styles.data_text_box}>
          <h3 className={styles.main_texts}> Данные аккаунта</h3>
          <p>can see onli you you</p>
          </div>
        </div>
        <div className={styles.main_info2}>
          <div className={styles.sames}>
            <img className={styles.icon_img} src={profile} />
            <div className="2text">
              <h4 className={styles.main_texts}>Имя пользователя</h4>
              <p>@antonkrem</p>
            </div>
          </div>
          <div className={styles.sames}>
            <img className={styles.icon_img} src={pochta} />
            <div className="2text">
              <h4 className={styles.main_texts}>Почта</h4>
              <p>@antonkrem</p>
            </div>
          </div>
          <div className={styles.sames}>
            <img className={styles.icon_img} src={password} />
            <div className="2text">
              <h4 className={styles.main_texts}>Пароль</h4>
              <p>***********</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.edit_btn}>
        <button  onClick={editFn} className={styles.edit}>
            <img src={neweditpen}/>
        </button>
      </div> */}
    </div>
  );
};

export default Data;
