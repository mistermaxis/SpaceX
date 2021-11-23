const SET_MISSIONS = 'missions/missionsAdded';

const initialState = {
  missions: [],
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return { ...state, missions: action.missions };
    default:
      return state;
  }
};

export function setMissions() {
  return { type: SET_MISSIONS, missions: [{ a: 'mission_1' }, { a: 'mission_2' }] };
}

export default missionsReducer;