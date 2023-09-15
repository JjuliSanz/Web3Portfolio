import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Redux-store";

// Define a type for the slice state
// This defines the structure of the state that this slice will manage
export interface actionState {
  Image_src: {
    data: string;
  };
  optionChoose: string;
  SearchQuery: string;
  StarMode: string;
  StarColor: string;
  MobileMenu: boolean;
}

// Define the initial state using that type
// This sets up the initial state for this slice based on the structure defined above
const initialState: actionState = {
  Image_src: {
    data: "",
  },
  optionChoose: "All",
  SearchQuery: "",
  StarMode: "",
  StarColor: "",
  MobileMenu: false,
};

// Create a slice of Redux state using createSlice
// This encapsulates the reducer logic and action creators for this slice
export const actionSlice = createSlice({
  name: "action", // Name of the slice
  initialState,   // Initial state for this slice
  reducers: {
    // Define actions and their corresponding reducers
    // These actions will update specific parts of the state
    set_Image_src: (
      state: actionState,
      action: PayloadAction<any> // PayloadAction type for actions with payloads
    ) => {
      state.Image_src = action.payload;
    },
    setOptionChoose: (
      state: actionState,
      action: PayloadAction<any>
    ) => {
      state.optionChoose = action.payload;
    },
    setSearchQuery: (
      state: actionState,
      action: PayloadAction<any>
    ) => {
      state.SearchQuery = action.payload;
    },
    setStarMode: (
      state: actionState,
      action: PayloadAction<any>
    ) => {
      state.StarMode = action.payload;
    },
    setStarColor: (
      state: actionState,
      action: PayloadAction<any>
    ) => {
      state.StarColor = action.payload;
    },
    setMobileMenu: (
      state: actionState,
      action: PayloadAction<any>
    ) => {
      state.MobileMenu = action.payload;
    },
  },
});

// Export the action creators for these reducers
export const {
  set_Image_src,
  setOptionChoose,
  setSearchQuery,
  setStarMode,
  setStarColor,
  setMobileMenu,
} = actionSlice.actions;

// Define selectors to access specific parts of the state
// These selectors allow components to retrieve specific data from the Redux store
export const Image_src_data = (state: RootState) => state.action.Image_src;
export const OptionChoose_data = (state: RootState) => state.action.optionChoose;
export const SearchQuery_data = (state: RootState) => state.action.SearchQuery;
export const StarMode_data = (state: RootState) => state.action.StarMode;
export const StarColor_data = (state: RootState) => state.action.StarColor;
export const MobileMenu_data = (state: RootState) => state.action.MobileMenu;

// Export the reducer function for this slice
export default actionSlice.reducer;
