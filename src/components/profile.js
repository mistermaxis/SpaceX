import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MyProfile = () => (
  <Container className="pt-3">
    <Row>
      <Col>
        <h3>My Missions</h3>
      </Col>
      <Col>
        <h3>My Rockets</h3>
      </Col>
    </Row>
  </Container>
);

export default MyProfile;
