import { getApi } from "@Utils/config/apis";
const locationIQToken = "pk.35d838dbfa2d5ea700de750f83ef41b7";

// get the address
export const searchLocation = (search: string,limit?:number) =>
  getApi(`https://us1.locationiq.com/v1/autocomplete?key=${locationIQToken}&q=${encodeURIComponent(
    search
  )}&limit=${limit}
`);

// Reverse geocoding (lat/lon → address)
export function reverseGeocoding(lat: number, lon: number) {
  return getApi(`https://us1.locationiq.com/v1/reverse?key=${locationIQToken}&lat=${lat}&lon=${lon}&format=json
`);
}
