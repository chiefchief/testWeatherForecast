import { FORECAST } from "./__proto__";

const SET_FORECAST = "[forecast] SET_FORECAST";
const RESET_FORECAST = "[forecast] RESET_FORECAST";
const initialState = new FORECAST();

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FORECAST:
      return action.forecast;
    case RESET_FORECAST:
      return initialState;
    default:
      return state;
  }
};

export const setForecast = forecast => async dispatch => {
  dispatch(saveForecast(new FORECAST(forecast)));
};

export const resetForecast = () => ({ type: RESET_FORECAST });
export const saveForecast = forecast => ({ type: SET_FORECAST, forecast });
