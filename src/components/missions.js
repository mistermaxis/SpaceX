import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
      {
        missions.map((mission) => (<p key={mission.mission_id}>{mission.mission_name}</p>))
      }
    </div>
  );
};

export default MissionList;
