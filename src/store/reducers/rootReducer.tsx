import { State } from "../../interfaces/stateInterface";
import { AnyAction } from "redux";
import { actions } from "../actions";

const initialState: State = {
  hotels: [],
  range: {
    startDate: null,
    endDate: null,
  },
  loading: false,
  error: '',
};

function rootReducer(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case actions.SET_HOTELS:
      return {
        ...state,
        hotels: action.data,
        error: '',
      };

    case actions.SET_RANGE:
      return {
        ...state,
        range: action.data,
        error: '',
      };

    case actions.LOADING:
      return { ...state, loading: action.loading };

    case actions.ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}

export default rootReducer;
