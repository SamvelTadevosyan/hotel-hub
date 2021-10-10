import { Dispatch } from "redux";
import {
  hotelsRequest
} from "../services/hotelsApiService";
import { HotelInterface, RangeInterface } from "../interfaces/hotelInterface";

export const actions = {
  SET_HOTELS: 'SET_HOTELS',
  SET_RANGE: 'SET_RANGE',
  LOADING: 'LOADING',
  ERROR: 'ERROR'
};

export function setHotels(
  dispatch: Dispatch,
  data: HotelInterface[],
): void {
  dispatch({
    type: actions.SET_HOTELS,
    data,
  });
}

export function setRange(
    dispatch: Dispatch,
    data: RangeInterface,
): void {
  dispatch({
    type: actions.SET_RANGE,
    data,
  });
}

export async function loadHotels(dispatch: Dispatch): Promise<void> {
  loading(dispatch, true);
  try {
    const data = await hotelsRequest();
    setHotels(dispatch, data);
    loading(dispatch, false);
  } catch (err) {
    error(dispatch, err as Error);
  }
}

export function loading(dispatch: Dispatch, loading: boolean): void {
  dispatch({ type: actions.LOADING, loading });
}

export function error(dispatch: Dispatch, err: Error): void {
  dispatch({
    type: actions.ERROR,
    error: err.message,
  });
}
