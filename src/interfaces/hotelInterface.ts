export interface HotelInterface {
  name: string;
  price: string;
  city: string;
  available_on: string;
}

export interface RangeInterface {
  startDate: Date | null,
  endDate: Date | null,
}
