import { getApi, postApi } from "@Utils/config/apis";

const API_SERVER_URL=process.env.REACT_APP_API_SERVER_URL
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


/**
 *  Get All  worker list imageUrl  and title
 */

export function getAllSkillsCategory(limit:number){
    return getApi(
      `${API_SERVER_URL}/upload/public/get_all_image?limit=${limit}`
    )
}

/**
 * Request user info from Google
 */
export function  googleLogin(access_token:string){
  return getApi(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  )
}
/**
 * Save Google user info to backend
 */
export function saveGoogleUser(data){
     return postApi(`${API_SERVER_URL}/auth/google-login`,data)
}


/**
 * get the city and state by Postcode
 */

export function getPostalCode(pincode:string){
  return getApi(`${API_SERVER_URL}/postal-code/${pincode}`)
}


/**
 *  upload image to s3 , single or multiple
 */

export function uploadImageToS3(data){
  return postApi(`${API_SERVER_URL}/s3/s3-upload/multiple`,data)
}


/**
 *  delete image from s3 , single or multiple
 */

export function deleteImageFromS3(data){
  return postApi(`${API_SERVER_URL}/s3/s3-upload/multiple`,data)
}


/**
 *   search workers by skills
 */
export function searchWorkersBySkills(search:string,page:number,limit:number){
    return getApi(`${API_SERVER_URL}/search?skills=${search}&page=${page}&limit=${limit}`)
}


 /**
   *    Get worker details by profile id
   */
export const getWorkerProfile  = (id:string) => getApi(`${API_SERVER_URL}/worker-profile/${id}`);


export const createReview=(data)=>postApi(`${API_SERVER_URL}/review`,data)