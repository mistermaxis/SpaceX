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
  missions.forEach((mission) => {
    Object.assign(mission, {
      joined: false,
    });
  });
  dispatch(getMissions(missions));
};

export const joinMission = (missions, id) => (dispatch) => {
  const newMissions = missions;
  newMissions.forEach((mission) => {
    if (mission.mission_id === id) {
      Object.assign(mission, {
        joined: true,
      });
    }
  });
  dispatch(setJoinMission(newMissions));
};

export default missionsReducer;
