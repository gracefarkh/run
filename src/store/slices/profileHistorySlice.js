import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: false,
  navigationProfile: 0,
  out: true,
  openModal: false,
  stateAllUsers: true,
};

const profileHistorySlice = createSlice({
  name: "profileHistorySlice",
  initialState,
  reducers: {
    editBtnRd: (state, action) => {
      state.edit = action.payload;
    },
    changeStateNavigationProfile: (state, action) => {
      state.navigationProfile = action.payload;
    },
    outButtonRd: (state, action) => {
      state.out = action.payload;
    },
    openModalRd: (state, action) => {
      state.openModal = action.payload;
    },
    changeStateAllUsers: (state, action) => {
      state.stateAllUsers = action.payload;
    },
  },
  // extraReducers: {},
});

export const {
  editBtnRd,
  changeStateNavigationProfile,
  outButtonRd,
  openModalRd,
  changeStateAllUsers,
} = profileHistorySlice.actions;
export default profileHistorySlice.reducer;
