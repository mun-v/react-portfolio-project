import { Container, Row, Col } from 'reactstrap';
import CoursesList from '../features/courses/CoursesList';
import CourseDetail from '../features/courses/CourseDetail';
import { selectRandomCourse } from '../features/courses/coursesSlice';


const CourseDirectoryPage = () => {
    const selectedCourse = selectRandomCourse();
    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CoursesList />
                </Col>
                <Col sm='7' md='5'>
                    <CourseDetail course={selectedCourse} />
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDirectoryPage;