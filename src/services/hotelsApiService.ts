import { HotelInterface } from "../interfaces/hotelInterface";

const githubApiUrl = 'http://www.mocky.io';

export async function hotelsRequest(): Promise<HotelInterface[]> {
  const data = await fetch(`${githubApiUrl}/v3/c40445b0-82e4-4e21-9916-9c8828f516d2`);

  return data.json();
}

