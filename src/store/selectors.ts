import { createSelector } from 'reselect';
import { State } from '../interfaces/stateInterface';
import { HotelInterface, RangeInterface } from '../interfaces/hotelInterface';

const selectHotels = (state: State): HotelInterface[] => state.hotels;

export const selectRange = (state: State): RangeInterface => state.range;

export const selectLoading = (state: State): boolean => state.loading;

export const selectHotelsInRange = createSelector(
  selectHotels,
  selectRange,
  (hotels: HotelInterface[], range: RangeInterface) => {
    if (range.startDate === null || range.endDate === null) {
      return [];
    }
    return hotels.filter(function (a) {
      const date = new Date(a.available_on);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return date >= range.startDate && date <= range.endDate
    })
});
