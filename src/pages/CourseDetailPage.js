import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCourseById } from "../features/courses/coursesSlice";
import CourseDetail from "../features/courses/CourseDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = useSelector(selectCourseById(courseId));
  console.log("courses:", course);

  return (
    <Container>
      <SubHeader current={course.name} detail={true} />
      <Row>
        <CourseDetail course={course} />
        <CommentsList courseId={courseId} />
      </Row>
    </Container>
  );
};

export default CourseDetailPage;
