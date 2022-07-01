import { createSlice } from "@reduxjs/toolkit";
import { INSTRUCTORS } from "../../app/shared/INSTRUCTORS";

const initialState = {
  instructorsArray: INSTRUCTORS,
};

const instructorsSlice = createSlice({
  name: "instructors",
  initialState,
});

export const instructorsReducer = instructorsSlice.reducer;

export const selectAllInstructors = (state) => {
  return state.instructors.instructorsArray;
};

export const selectFeaturedInstructor = (state) => {
  return state.instructors.instructorsArray.find(({ featured }) => featured);
};
