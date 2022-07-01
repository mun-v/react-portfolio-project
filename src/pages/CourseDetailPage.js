import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCourseById } from '../features/courses/coursesSlice';
import CourseDetail from '../features/courses/CourseDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const CourseDetailPage = () => {
    const { courseId } = useParams();
    const course = selectCourseById(courseId);

    return (
        <Container>
            <Row>
                <SubHeader current={course.name} detail={true} />
                <CourseDetail course={course} />
                <CommentsList courseId={courseId} />
            </Row>
        </Container>
    );
};

export default CourseDetailPage;