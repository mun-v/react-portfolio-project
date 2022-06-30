import { Container, Row, Col } from 'reactstrap';
import { useState } from 'react';
import CoursesList from '../features/courses/CoursesList';
import CourseDetail from '../features/courses/CourseDetail';
import { selectCourseById } from '../features/courses/coursesSlice';


const CourseDirectoryPage = () => {
    const [courseId, setCourseId] = useState(0);
    const selectedCourse = selectCourseById(courseId);
    
    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CoursesList setCourseId={setCourseId} />
                </Col>
                <Col sm='7' md='5'>
                    <CourseDetail course={selectedCourse} />
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDirectoryPage;