import { COURSES } from "../../app/shared/COURSES";

export const selectAllCourses = () => {
  return COURSES;
};

export const selectCourseById = (id) => {
  return COURSES.find((course) => course.id === id);
  
};

// export const selectFeaturedCourses = () => {
    // return COURSES.find((course) => course.featured);
// };