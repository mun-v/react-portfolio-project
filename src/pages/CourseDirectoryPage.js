import { Container } from 'reactstrap';
import CourseList from '../features/courses/CourseList';
// import SubHeader from '../components/SubHeader';

const CourseDirectoryPage = () => {
    return (
        <Container>
            {/* <SubHeader current='Directory' /> */}
            <CourseList />
        </Container>
    );
};

export default CourseDirectoryPage;