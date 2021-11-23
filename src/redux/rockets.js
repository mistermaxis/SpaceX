import apiGetElements from '../api/api';

const GET_ROCKETS = 'missions/rocketsAdded';

const initialState = {
  rockets: [],
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return { ...state, rockets: action.rockets };
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
