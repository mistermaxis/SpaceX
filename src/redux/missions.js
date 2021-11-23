import apiGetElements, { GET_MISSIONS } from '../api/api';

const initialState = {
  missions: [],
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return { ...state, missions: action.missions };
    default:
      return state;
  }
};

function getMissions(payload) {
  return { type: GET_MISSIONS, missions: payload };
}

export const fetchMissions = () => async (dispatch) => {
  const action = { type: GET_MISSIONS };
  const missions = await apiGetElements(action);
  dispatch(getMissions(missions));
};

export default missionsReducer;
