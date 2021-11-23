import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets';

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h1>Rockets</h1>
      {
        rockets.map((rocket) => (<p key={rocket.rocket_id}>{rocket.rocket_name}</p>))
      }
    </div>
  );
};

export default RocketList;
