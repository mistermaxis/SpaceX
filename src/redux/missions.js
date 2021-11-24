import apiGetElements, { GET_MISSIONS } from '../api/api';

const JOIN_MISSION = 'missions/missionJoined';
const LEAVE_MISSION = 'missions/missionLeft';

const initialState = {
  missions: [],
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return { ...state, missions: action.missions };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => (
          mission.mission_id === action.id
            ? { ...mission, joined: true }
            : { ...mission }
        )),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => (
          mission.mission_id === action.id
            ? { ...mission, joined: false }
            : { ...mission }
        )),
      };
    default:
      return state;
  }
};

function getMissions(payload) {
  return { type: GET_MISSIONS, missions: payload };
}

function setJoinMission(payload) {
  return { type: JOIN_MISSION, id: payload };
}

function setLeaveMission(payload) {
  return { type: LEAVE_MISSION, id: payload };
}

export const fetchMissions = () => async (dispatch) => {
  const action = { type: GET_MISSIONS };
  const missions = await apiGetElements(action);
  dispatch(getMissions(missions));
};

export const joinMission = (id) => (dispatch) => {
  dispatch(setJoinMission(id));
};

export const leaveMission = (id) => (dispatch) => {
  dispatch(setLeaveMission(id));
};

export default missionsReducer;
