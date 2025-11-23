import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { forwardGeocoding, reverseGeocoding, searchLocation } from "@Utils/controllers/location";
import React, { createContext, useContext } from "react";
interface LocationContextI {
  useGetAddress: any;
  useReverseGeocodingToAddress:any;
  useForwardGeocodingAddressToLatLon:(query:string)=>UseQueryResult | any
}

const LocationContext = createContext<LocationContextI>({} as LocationContextI);

export const useLocations = () => useContext(LocationContext);

const useLoacationData = () => {
  //  get the address
  const useGetAddress = (search: string,limit?:number) => {
    return useQuery({
      queryKey: ["location",search,limit],
      queryFn: () => searchLocation(search,limit),
      gcTime: 0,
      enabled:!!search,
      select:(data)=>data.data
    });
  };

// Reverse geocoding (lat/lon → address)
  const useReverseGeocodingToAddress = (latitude: number,longitude:number) => {
    return useQuery({
      queryKey: ["reverseGeocoding",latitude,longitude],
      queryFn: () => reverseGeocoding(latitude,longitude),
      gcTime: 0,
      enabled:!!latitude && !!longitude,
      select:(data)=>data.data
    });
  };

  
// forward geocoding (address -> lat/lon )
  const useForwardGeocodingAddressToLatLon = (query) => {
    return useQuery({
      queryKey: ["reverseGeocoding",query],
      queryFn: () => forwardGeocoding(query),
      gcTime: 0,
      enabled:!!query,
      select:(data)=>data.data
    });
  };


  return {
    useGetAddress,
    useReverseGeocodingToAddress,
    useForwardGeocodingAddressToLatLon
  };
};

interface ProvideLocationI {
  children: React.ReactNode;
}
export function ProvideLocation({ children }: ProvideLocationI) {
  const locationData = useLoacationData();
  return (
    <LocationContext.Provider value={locationData}>
      {children}
    </LocationContext.Provider>
  );
}
