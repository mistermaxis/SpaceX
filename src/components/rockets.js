import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets';

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const rocketItem = rockets.map((item) => (
    <div key={item.id} className="">
      <img src={item.flickr_images[0]} alt={item.rocket_name} />
      <div className="">
        <h3>{item.rocket_name}</h3>
        <div className="">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      {rocketItem}
    </div>
  );
};

export default RocketList;
