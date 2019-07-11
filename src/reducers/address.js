import { ADDRESS } from "./__proto__";
import { getForecast } from "services/weather";
import { setForecast } from "reducers/forecast";

const SET_ADDRESS = "[address] SET_ADDRESS";
const RESET_ADDRESS = "[address] RESET_ADDRESS";
const initialState = new ADDRESS();

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return action.address;
    case RESET_ADDRESS:
      return initialState;
    default:
      return state;
  }
};

export const setAddress = address => async dispatch => {
  await dispatch(saveAddress(new ADDRESS(address)));
  const a = await getForecast(address.lat, address.lng);
  dispatch(setForecast(a));
};

export const clearAddress = () => ({ type: RESET_ADDRESS });
export const saveAddress = address => ({ type: SET_ADDRESS, address });
