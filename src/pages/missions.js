import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMissions } from '../redux/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(state => state.missionsReducer.missions);

  useEffect(() => {
    dispatch(setMissions());
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
      {
        missions.map((mission, index) => {
          return (<p key={index}>{mission.a}</p>);
        })
      }
    </div>
  );
}
 
export default Missions;