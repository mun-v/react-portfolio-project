import { Col, Row } from "reactstrap";
import { useSelector } from 'react-redux';
import { selectFeaturedCourse } from "../courses/coursesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedInstructor } from "../instructors/instructorsSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";

const DisplayList = () => {
  const items = useSelector((state) =>[
    selectFeaturedCourse(state),
    selectFeaturedPromotion(state),
    selectFeaturedInstructor(state),
  ]);
    console.log('display items:', items);

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
