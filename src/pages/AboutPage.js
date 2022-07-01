import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from '../components/SubHeader';
// import PartnersList from '../features/partners/PartnersList';

const AboutPage = () => {
  return (
    <Container>
        <SubHeader current='About Us' />
      <Row className="row-content">
        <Col sm="6">
          <h3>Our Mission</h3>
          <p>
            Dedicated to enriching lives through teaching, educating and performing
            of cultural dances.
          </p>
          <br />
          <h3>Our Vision</h3>
          <p>
            To create a welcoming community of dancers who share the joy of dance.
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
                Dance is the movements of the universe concentrated
                in an individual.
              </p>
              <footer className='blockquote-footer'>
                Isadora Duncan,{' '}
                                        <cite title='Source Title'>
                                            American dancer and choreographer, 
                                            1877-1927
                                        </cite>
              </footer>
            </blockquote>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs='12'>
            <h3>Community Partners</h3>
        </Col>
        {/* <PartnersList /> */}
      </Row>
    </Container>
  );
};

export default AboutPage;
