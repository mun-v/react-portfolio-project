import { Col, Row } from "reactstrap";
import CourseCard from "./CourseCard";
import { selectAllCourses } from "./courseSlice";

const CourseList = () => {
  const course = selectAllCourses();
  return (
      <Row className='ms-auto'>
          {course.map((course) => {
              return (
                  <Col md='5' className='m-4' key={course.id}>
                      <CourseCard course={course} />
                  </Col>
              );
          })}
      </Row>
  );
};

export default CourseList;
