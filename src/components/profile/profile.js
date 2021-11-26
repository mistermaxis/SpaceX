import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const joinedMissions = useSelector((s) => s.missionsReducer.missions.filter((m) => m.joined));
  const joinedRockets = useSelector((s) => s.rocketsReducer.rockets.filter((r) => r.reserved));

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
          <ListGroup>
            {
              joinedRockets.map((rocket) => (
                <ListGroup.Item key={rocket.rocket_id}>
                  {rocket.rocket_name}
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
