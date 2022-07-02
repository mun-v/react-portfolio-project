import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import InstructorsList from "../features/instructors/InstructorsList";

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About Us" />
      <Row className="row-content">
        <Col sm="8">
          <h3>About Amira's Dance Productions</h3>
          <p>
            Founded in 1974 by Alice Castilow, Amira Dance Productions is Wichita's
            longest-running, community dance studio offering instruction and
            performances in various cultural dance styles from across the globe.
          </p>
          <p>
            The studio is known for its annual dance show that educates and
            entertains Wichita audiences with cultural dance, as well as
            performances at community and private events.
          </p>
        </Col>
        <Col sm="6">
          <h3>Our Mission</h3>
          <p>
            Dedicated to enriching lives through teaching, educating and
            performing of cultural dances.
          </p>
          <br />
          <h3>Our Vision</h3>
          <p>
            To create a welcoming community of dancers who share the joy of
            dance.
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader className="bg-primary-text-white">
              <h3>Facts at a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">1974</dd>
                <dt className="col-6">Founder</dt>
                <dd className="col-6">Alice Castilow</dd>
                <dt className="col-6">Studio Directors</dt>
                <dd className="col-6">Di Flower and Elisa Montoya</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="bg-light mt-3">
            <blockquote className="blockquote">
              <p>
                Dance is the movements of the universe concentrated in an
                individual.
              </p>
              <footer className="blockquote-footer">
                Isadora Duncan,{" "}
                <cite title="Source Title">
                  American dancer and choreographer, 1877-1927
                </cite>
              </footer>
            </blockquote>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h3>Amira Dance Productions Staff</h3>
        </Col>
        <InstructorsList />
      </Row>
    </Container>
  );
};

export default AboutPage;
