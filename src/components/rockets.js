import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookRocket, cancelBooking, fetchRockets } from '../redux/rockets';

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleMessage = (reserved) => (reserved ? 'Cancel Booking' : 'Book Rocket');

  return (
    <div className="container-fluid">
      {
        rockets.map((item) => (
          <div key={item.id} className="container-fluid d-flex my-4 mx-0 mainDiv">
            <img className="img-fluid" src={item.flickr_images[0]} alt={item.rocket_name} />
            <div className="">
              <h3>{item.rocket_name}</h3>
              <div className="">
                <p>{item.description}</p>
              </div>
              <button type="button" onClick={() => { dispatch(!item.reserved ? bookRocket(item.id) : cancelBooking(item.id)); }}>{handleMessage(item.reserved)}</button>
            </div>
          </div>
        ))
      }
      ;
    </div>
  );
};

export default RocketList;
