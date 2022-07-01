import { COURSES } from "../../app/shared/COURSES";

export const selectAllCourses = () => {
  return COURSES;
};

export const selectCourseById = (id) => {
  return COURSES.find((course) => course.id === parseInt(id));
  
};

export const selectFeaturedCourse = () => {
    return COURSES.find((course) => course.featured);
};