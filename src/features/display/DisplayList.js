import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCourse } from '../courses/coursesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedInstructor } from '../instructors/instructorsSlice';

const DisplayList = () => {
    const items = [selectFeaturedCourse(), selectFeaturedPromotion(), selectFeaturedInstructor()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;