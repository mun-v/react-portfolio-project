import { createSlice } from '@reduxjs/toolkit';
import { COURSES } from "../../app/shared/COURSES";

const initialState = {
  coursesArray: COURSES,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
});

export const coursesReducer = coursesSlice.reducer;

export const selectAllCourses = () => {
  return COURSES;
};

export const selectCourseById = (id) => {
  return COURSES.find((course) => course.id === parseInt(id));
  
};

export const selectFeaturedCourse = () => {
    return COURSES.find((course) => course.featured);
};