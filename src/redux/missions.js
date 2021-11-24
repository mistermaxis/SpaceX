import apiGetElements from '../api/api';

const GET_MISSIONS = 'missions/missionsAdded';
const JOIN_MISSION = 'missions/missionJoined';

const initialState = {
  missions: [],
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return { ...state, missions: action.missions };
    case JOIN_MISSION:
      return { ...state, missions: action.missions };
    default:
      return state;
  }
};

function getMissions(payload) {
  return { type: GET_MISSIONS, missions: payload };
}

function setJoinMission(payload) {
  return { type: JOIN_MISSION, missions: payload };
}

export const fetchMissions = () => async (dispatch) => {
  const action = { type: GET_MISSIONS };
  const missions = await apiGetElements(action);
  dispatch(getMissions(missions));
};

export const joinMission = (missions, id) => (dispatch) => {
  const index = missions.findIndex((item) => item.mission_id === id);
  Object.assign(missions[index], { joined: true });
  dispatch(setJoinMission(missions));
};

export default missionsReducer;
