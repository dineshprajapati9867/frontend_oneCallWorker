import { deleteApi, getApi, postApi, putApi } from "@Utils/config/apis";
import axios from "axios";

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
  return axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
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

// create review
export const createReview=(data)=>postApi(`${API_SERVER_URL}/review`,data)

// getting all review by worker id
export const getAllReviews=(id:string,page:number)=>{
   return getApi(`${API_SERVER_URL}/review/all/${id}?page=${page}&limit=10`)
}


// get the review details by review id

export const getReviewDetails=(id:string)=>{
   return getApi(`${API_SERVER_URL}/review/details/${id}`)
}

// comment on review
 export const commentOnReview=(data)=>{
  return postApi(`${API_SERVER_URL}/review-comment`,data)
 } 

 // get the comments by review id

export const getCommentOfReview=(id:string)=>{
   return getApi(`${API_SERVER_URL}/review-comment/${id}`)
}
 // update the comments by commnt id

export const updateReviewComment = ({
  commentId,
  description,
}: {
  commentId: string;
  description: string;
}) => {
  return putApi(
    `${API_SERVER_URL}/review-comment/${commentId}`,
    { description }
  );
};
 // delete the comments by comemnt id

export const deleteReviewComment=(commntId:string)=>{
   return deleteApi(`${API_SERVER_URL}/review-comment/${commntId}`)
}


// click the likes of review 

export const  toggleReviewLike =(reviewId:string)=>{
  return postApi(`${API_SERVER_URL}/review/${reviewId}/like`,{})
}

// delete the review by reviewId

export const deleteReview=(id:string)=>{
  return deleteApi(`${API_SERVER_URL}/review/delete/${id}`)
}

// bookmark 

export const bookmarkWorker=(workerId:string)=>{
  return postApi(`${API_SERVER_URL}/bookmark`,{
    workerId
  })
}
export const getBookmarks=(page:number)=>{
  return getApi(`${API_SERVER_URL}/bookmark?page=${page}`)
}