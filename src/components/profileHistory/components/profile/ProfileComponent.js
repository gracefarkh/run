import React from "react";
import styles from "./ProfileComponent.module.css";
import profile from "../../../../assets/images/ProfileHistory/images/profile.svg";
import pochta from "../../../../assets/images/ProfileHistory/images/pochta.svg";
import editImg from "../../../../assets/images/ProfileHistory/images/bluepen.svg";
import password from "../../../../assets/images/ProfileHistory/images/password.svg";
import blue from "../../../../assets/images/ProfileHistory/images/neweditpen.svg";
import { useDispatch } from "react-redux";
import { editBtnRd } from "../../../../store/slices/profileHistorySlice";

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const editButtonFn = () => {
    dispatch(editBtnRd(true));
  };
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileComponent}>
        <div className={styles.mainFirstProfileBlock}>
          <div className={styles.blueContainer}>
            <h4>Профиль</h4>
          </div>
          <div className={styles.secondProfileBlock}>
            <div className={styles.secondBlockInfo}>
              <div>
                <h4>Имя:</h4>
                <div>
                  <h3>Михаил</h3>
                  <div className={styles.line}></div>
                </div>
              </div>
              <div>
                <h4>Фамилие:</h4>
                <div>
                  <h3>Григорьев</h3>
                  <div className={styles.line}></div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h4>Обо мне:</h4>
              </div>
              <div>
                <input placeholder="Введите информацию" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainFirstProfileBlock}>
          <div className={styles.blueContainer}>
            <div>
            <h4>Данные аккаунта</h4>
            <p>видно только вам</p>
            </div>
          </div>
          <div className={styles.namesEmails}>
            <div className={styles.secondBlockInformations}>
              <div>
                <img className={styles.icons} src={profile} />
              </div>
              <div>
                <h4>Имя пользователя</h4>
                <p>@antoncrem</p>
              </div>
            </div>
            <div className={styles.secondBlockInformations}>
              <div>
                <img className={styles.icons} src={pochta} />
              </div>
              <div>
                <h4>Почта</h4>
                <p>aizhamal@gmail.com</p>
              </div>
            </div>
            <div className={styles.secondBlockInformations}>
              <div>
                <img className={styles.icons} src={password} />
              </div>
              <div>
                <h4>Пароль</h4>
                <p>***********</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.editBtn} onClick={editButtonFn}>
        <h4>Редактировать</h4>
        <img src={blue} />
      </button>
    </div>
  );
};

export default ProfileComponent;
