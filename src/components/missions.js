import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { fetchMissions } from '../redux/missions';
import './missions.css';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="pt-4 d-flex justify-content-center">
      <Table striped bordered className="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td className="align-middle"><Badge bg="secondary">NOT A MEMBER</Badge></td>
                <td className="align-middle text-nowrap px-3"><Button variant="outline-secondary">Join Mission</Button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default MissionList;
