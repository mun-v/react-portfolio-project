import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


const CourseCard = (props) => {
  return (
      <Card>
        <CardImg 
          width="100%" 
          src={props.course.image} 
          alt={props.course.name} 
        />
        <CardImgOverlay>
          <CardTitle>{props.course.name}</CardTitle>
        </CardImgOverlay>
      </Card>
  );
};

export default CourseCard;
