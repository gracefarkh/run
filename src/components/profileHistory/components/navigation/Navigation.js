import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import icon from "../../../../assets/images/ProfileHistory/images/icon.svg";
import out from "../../../../assets/images/ProfileHistory/images/out.svg";
import Modalprofile from "../modalProfile/Modalprofile";
import whiteprofile from ".././../../../assets/images/ProfileHistory/images/whiteprofile.svg";
import whitefavorits from "../../../../assets/images/ProfileHistory/images/hitefavorites.svg";
import whitereviews from "../../../../assets/images/ProfileHistory/images/whitereviews.svg";
import { useDispatch, useSelector } from "react-redux";

import {
  changeStateNavigationProfile,
  outButtonRd,
  openModalRd,
  changeStateAllUsers,
} from "../../../../store/slices/profileHistorySlice";

const Navigation = () => {
  const dispatch = useDispatch();

  // const { out } = useSelector((state) => state.profileHistorySlice);

  const outButton = () => {
    dispatch(outButtonRd());
    dispatch(openModalRd(true));
    dispatch(changeStateAllUsers(false));
  };

  return (
    <div className={styles.container_for_blueblock}>
      <div className={styles.main_container}>
        <div className={styles.block_profile}>
          <img src={icon} />
          <h4 className={styles.username}>Anton</h4>
          <p className={styles.email}>@email</p>
        </div>
        {/* /////////////////////////////// */}
        <div className={styles.navigation_elements}>
          <div className={styles.for_hover}>
            <NavLink style={navLinkStyles} to="/">
              <div
                className={styles.every}
                onClick={() => {
                  dispatch(changeStateNavigationProfile(0));
                }}
              >
                <img className={styles.img} src={whiteprofile} />
                <h3 className={styles.profile_text}>Профиль</h3>
              </div>
            </NavLink>
          </div>

          <div
            className={styles.every}
            onClick={() => {
              dispatch(changeStateNavigationProfile(1));
            }}
          >
            <img className={styles.img} src={whitereviews} />
            <h3 className={styles.profile_text}>Мои отзывы</h3>
          </div>

          <div
            className={styles.every}
            onClick={() => {
              dispatch(changeStateNavigationProfile(2));
            }}
          >
            <img className={styles.img} src={whitefavorits} />
            <h3 className={styles.profile_text}>Избранное</h3>
          </div>
        </div>
        {/* ///////////////////////////////////// */}
        {out && (
          <div className={styles.out} onClick={outButton}>
            <div className={styles.out_info}>
              <button className={styles.out_btn}>
                <img className={styles.img} src={out} />
                <h3 className={styles.profile_text_red}>Выйти</h3>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
