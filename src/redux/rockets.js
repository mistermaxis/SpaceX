import apiGetElements, { GET_ROCKETS } from '../api/api';

const BOOK_ROCKET = 'space-travellers/rockets/BOOK_ROCKET';

const initialState = {
  rockets: [],
};

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  id,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return { ...state, rockets: action.rockets };

    case BOOK_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.id) { return rocket; }
          return { ...rocket, reserved: true };
        }),
      };

    default:
      return state;
  }
};

function getRockets(payload) {
  return { type: GET_ROCKETS, rockets: payload };
}

export const fetchRockets = () => async (dispatch) => {
  const action = { type: GET_ROCKETS };
  const rockets = await apiGetElements(action);
  dispatch(getRockets(rockets));
};

export default rocketsReducer;
