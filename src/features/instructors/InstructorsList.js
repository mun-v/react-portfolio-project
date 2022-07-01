import { Row, Col } from 'reactstrap';
import Instructor from './Instructor';
import { selectAllInstructors } from './instructorsSlice';

const InstructorsList = () => {
    const instructors = selectAllInstructors();

    return(
        <Col className='mt-4'>
            <Row>
                {instructors.map((instructor) => {
                    return (
                        <div className='d-flex mb-5' key={instructor.id}>
                            <Instructor instructor={instructor} />
                        </div>
                    )
                })}
            </Row>
        </Col>
    );
};

export default InstructorsList;