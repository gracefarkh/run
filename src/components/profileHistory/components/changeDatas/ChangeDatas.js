import React from "react";
import styles from "./ChangeDatas.module.css";
import profile from "../../../../assets/images/ProfileHistory/images/profile.svg";
import pochta from "../../../../assets/images/ProfileHistory/images/pochta.svg";
import block from "../../../../assets/images/ProfileHistory/images/password.svg";
import { editBtnRd } from "../../../../store/slices/profileHistorySlice";
import { useDispatch } from "react-redux";

const ChangeDatas = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.for_dataBlock}>
      <div className={styles.for_profile}>
        <div>
          <h3 className={styles.profileText}>Профиль</h3>
        </div>
        <div className={styles.info_inputs}>
          <div className={styles.userSurname}>
            <h4 className={styles.title}>Фамилие:</h4>
            <input placeholder="" disabled />
          </div>
          <div className={styles.userSurname}>
            <h4 className={styles.title}>Имя:</h4>
            <input placeholder="" disabled />
          </div>
        </div>
        <div>
          <h4 className={styles.title}>Обо мне:</h4>
          <input className={styles.input} placeholder="Введите информацию" />
        </div>
      </div>
      <div className={styles.for_profile}>
        <div>
          <h4 className={styles.dannyieAkk}>Данные аккаунта</h4>
          <p className={styles.canSeeOnliU}>видно только вам</p>
        </div>
        <div className={styles.information}>
          <div className={styles.information_blocks}>
            <img src={profile} className={styles.iconPhotos} />
            <div className={styles.two_infos}>
              <h5 className={styles.mainTexts}>Имя пользователя</h5>
              <p>@antonkrem</p>
            </div>
          </div>
          <div className={styles.information_blocks}>
            <img src={pochta} className={styles.iconPhotos} />
            <div className={styles.two_infos}>
              <h5 className={styles.mainTexts}>Почта</h5>
              <p>aizhamal@gmail.com</p>
            </div>
          </div>
          <div className={styles.information_blocks}>
            <img src={block} className={styles.iconPhotos} />
            <div className={styles.two_infos}>
              <h5 className={styles.mainTexts}>Пароль</h5>
              <p>*********</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.datasBtns}>
        <button
          className={styles.cancelBtn}
          onClick={() => dispatch(editBtnRd(false))}
        >
          <h4 className={styles.cancelText}>Отмена</h4>
        </button>
        <button
          className={styles.keepBtn}
          onClick={() => dispatch(editBtnRd(false))}
        >
          <h4 className={styles.keepText}>Сохранить</h4>
        </button>
      </div>
    </div>
  );
};

export default ChangeDatas;
