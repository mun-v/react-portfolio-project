import { Col, Row } from "reactstrap";
import { selectFeaturedCourse } from "../courses/coursesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedInstructor } from "../instructors/instructorsSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";

const DisplayList = () => {
  const items = [
    selectFeaturedCourse(),
    selectFeaturedPromotion(),
    selectFeaturedInstructor(),
  ];

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
