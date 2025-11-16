import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { forwardGeocoding, reverseGeocoding, searchLocation } from "@Utils/controllers/location";
import { getAllWorkerList } from "@Utils/controllers/misc";
import { getAllWorkerListPropI } from "@Utils/interfaces";
import React, { createContext, useContext } from "react";
interface MiscContextI {
  useGetAddress: any;
  useReverseGeocodingToAddress:any;
  useForwardGeocodingAddressToLatLon:(query:string)=>UseQueryResult | any;
 // useGetAllWorkerList:()=>UseQueryResult<getAllWorkerListPropI[]>
}

const LocationContext = createContext<MiscContextI>({} as MiscContextI);

export const useMisc = () => useContext(LocationContext);

const useMiscData = () => {
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

/**
 *  Get All worker List imageLink and titile
 */

// const useGetAllWorkerList=()=>{
//   return useQuery({
//     queryKey:["allWorkerListImageAndTitle"],
//     queryFn:getAllWorkerList,
//     select:(data)=>data.data,
//   })
// }
  return {
    useGetAddress,
    useReverseGeocodingToAddress,
    useForwardGeocodingAddressToLatLon,
    // useGetAllWorkerList
  };
};

interface ProvideMiscI {
  children: React.ReactNode;
}
export function ProvideMisc({ children }: ProvideMiscI) {
  const locationData = useMiscData();
  return (
    <LocationContext.Provider value={locationData}>
      {children}
    </LocationContext.Provider>
  );
}
