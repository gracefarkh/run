import React from "react";
import Navigation from "../../components/profileHistory/components/navigation/Navigation";
import styles from "./ProfileHistory.module.css";
import ChangeDatas from "../../components/profileHistory/components/changeDatas/ChangeDatas";
import { useDispatch, useSelector } from "react-redux";
import ProfileComponent from "../../components/profileHistory/components/profile/ProfileComponent";
import Reviews from "../../components/profileHistory/components/reviews/Reviews";
import Favorits from "../../components/profileHistory/components/favorites/Favorits";
import Modalprofile from "../../components/profileHistory/components/modalProfile/Modalprofile";

function ProfileHistory() {
  // const dispatch = useDispatch();

  const { edit, navigationProfile, openModal, stateAllUsers } = useSelector(
    (state) => state.profileHistorySlice
  );

  return (
    <div className={styles.all}>
      <div className={styles.big_container}>
        <Navigation />
      </div>
      {stateAllUsers && (
        <>
          {navigationProfile === 0 && (
            <div className={styles.components}>
              {edit ? <ChangeDatas /> : <ProfileComponent />}
            </div>
          )}
          {navigationProfile === 1 && <Reviews />}
          {navigationProfile === 2 && <Favorits />}
        </>
      )}
      {openModal && <Modalprofile />}
    </div>
  );
}

export default ProfileHistory;
