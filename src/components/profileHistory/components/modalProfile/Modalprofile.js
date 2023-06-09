import React from "react";
import iks from "../../../../assets/images/ProfileHistory/images/iks.svg";
import styles from "./Modalprofile.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalRd,
  changeStateAllUsers,
} from "../../../../store/slices/profileHistorySlice";

const Modalprofile = () => {
  const dispatch = useDispatch();
  const { stateAllUsers } = useSelector((state) => state.profileHistorySlice);

  const cancelBtnFn = () => {
    dispatch(changeStateAllUsers(true));
    dispatch(openModalRd(false));
  };
  return (
    <div className={styles.parent_modal}>
      <div className={styles.modal}>
        <div className={styles.for_btn}>
          <button className={styles.btn_x}>
            <img src={iks} />
          </button>
        </div>
        <div className={styles.contain}>
          <div>
            <h4 className={styles.sure_text}>Вы уверены что хотите выйти ?</h4>
          </div>
          <div className={styles.buttons}>
            <button className={styles.cancel} onClick={cancelBtnFn}>
              Отмена
            </button>
            <button className={styles.yes}>Да</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalprofile;
