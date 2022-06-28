import { INSTRUCTORS } from "../../app/shared/INSTRUCTORS";

export const selectAllCourses = () => {
  return INSTRUCTORS;
};

export const selectCoursesById = (id) => {
  return INSTRUCTORS.find((course) => course.id === parseInt(id));
  
};

export const selectFeaturedCourses = () => {
    return INSTRUCTORS.find((course) => course.featured);
};