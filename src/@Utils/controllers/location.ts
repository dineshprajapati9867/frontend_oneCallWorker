import { getApi } from "@Utils/config/apis";

// get the address
export const searchLocation = (search: string,limit?:number) =>
  getApi(`https://us1.locationiq.com/v1/autocomplete?key=${process.env.REACT_APP_LOCATION_TOKEN}&q=${encodeURIComponent(
    search
  )}&limit=${limit}&countrycodes=IN&city=mumbai&format=json
`);

// Reverse geocoding (lat/lon → address)
export function reverseGeocoding(lat: number, lon: number) {
  return getApi(`https://us1.locationiq.com/v1/reverse?key=${process.env.REACT_APP_LOCATION_TOKEN}&lat=${lat}&lon=${lon}&format=json
`);
}
/** 
 *  forward Geocoding  (address -> lat/lon)
**/
export function forwardGeocoding(query:string) {
  return getApi(
    `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_TOKEN}&q=${encodeURIComponent(query)}&countrycodes=in&format=json`
  );
}

