import apiGetElements from '../api/api';

const GET_MISSIONS = 'missions/missionsAdded';

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
  missions.forEach((mission) => {
    Object.assign(mission, {
      joined: false,
    });
  });
  dispatch(getMissions(missions));
};

export default missionsReducer;
