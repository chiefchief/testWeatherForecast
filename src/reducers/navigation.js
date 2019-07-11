import route from "services/route";
const SET_TAB = "[tab] SET_TAB";

export default (state = 0, action) => {
  switch (action.type) {
    case SET_TAB:
      return action.tab;
    default:
      return state;
  }
};

export const setTab = tab => async (dispatch, getState) => {
  const { navigation } = getState();
  if (navigation !== tab) {
    if (tab === 0) {
      route.navigate("Map");
    } else {
      route.navigate("Search");
    }
    dispatch(saveTab(tab));
  }
};

export const saveTab = tab => ({ type: SET_TAB, tab });
