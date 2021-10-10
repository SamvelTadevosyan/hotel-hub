import { HotelInterface, RangeInterface } from './hotelInterface';

export interface State {
    hotels: HotelInterface[];
    range: RangeInterface;
    loading: boolean;
    error: string;
}
