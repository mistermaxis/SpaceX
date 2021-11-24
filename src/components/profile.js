import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

const MyProfile = () => {
  const joinedMissions = useSelector((s) => s.missionsReducer.missions.filter((m) => m.joined));

  return (
    <Container className="pt-3">
      <Row>
        <Col>
          <h3>My Missions</h3>
          <ListGroup>
            {
              joinedMissions.map((mission) => (
                <ListGroup.Item key={mission.mission_id}>
                  {mission.mission_name}
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
        <Col>
          <h3>My Rockets</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
