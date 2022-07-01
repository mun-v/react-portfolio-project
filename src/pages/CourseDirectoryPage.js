import { Container } from 'reactstrap';
import CoursesList from '../features/courses/CoursesList';
import SubHeader from '../components/SubHeader';

const CourseDirectoryPage = () => {
    
    return (
        <Container>
            <SubHeader current='Directory' />
            <CoursesList />
        </Container>
    );
};

export default CourseDirectoryPage;