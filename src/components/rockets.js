import { useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { bookRocket, cancelBooking, fetchRockets } from '../redux/rockets';

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  const handleMessage = (reserved) => (reserved ? 'Cancel reservation' : 'reserve Rocket');
  const handleReserved = (reserved) => (reserved ? 'Reserved' : '');

  return (
    <div className="container-fluid">
      {
        rockets.map((item) => (
          <div key={item.id} className="container-fluid d-flex my-4 mx-0 mainDiv">
            <img className="img-fluid" src={item.flickr_images[0]} alt={item.rocket_name} />
            <div className="">
              <h3>{item.rocket_name}</h3>
              <div className="">
                <Badge bg="info">{handleReserved(item.reserved)}</Badge>
                <p>{item.description}</p>
              </div>
              <Button type="button" onClick={() => { dispatch(!item.reserved ? bookRocket(item.id) : cancelBooking(item.id)); }}>{handleMessage(item.reserved)}</Button>
            </div>
          </div>
        ))
      }
      ;
    </div>
  );
};

export default RocketList;
