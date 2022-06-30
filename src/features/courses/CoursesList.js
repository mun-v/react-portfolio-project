import { COURSES } from "../../app/shared/COURSES";
import { Col, Row } from "reactstrap";
import CourseCard from "./CourseCard";

const CoursesList = () => {
  return (
    <Row>
      {COURSES.map((course) => {
        return (
          <Col md="5" className="m-4" key={course.id}>
            <CourseCard course={course} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CoursesList;
