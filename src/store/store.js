import { configureStore } from "@reduxjs/toolkit";
import probkaReducer from "./slices/probkaSlice";
import profileHistoryReducer from "./slices/profileHistorySlice";
import profileHistorySlice from "./slices/profileHistorySlice";

export default configureStore({
  reducer: {
    probkaReducer,
    profileHistoryReducer,
    profileHistorySlice,
  },
});
