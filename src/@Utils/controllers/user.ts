import { getApi, postApi } from "@Utils/config/apis";
const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;
/**
 * Create the user
 */

export const createProfileUser = (data: any) =>
  postApi(`${API_SERVER_URL}/profile`, data);

// get All worker based on skill
// export const getAllWorkersBasedOnSkill = (
//   skill: string,
//   page: number,
//   limit: number,
// ) =>
//   getApi(
//     `${API_SERVER_URL}/workers?skill=${skill}&page=${page}&limit=${limit}`,
//   );



  /**
   *   Get logged-in user's profile
   */
  
export const getMyProfile  = () => getApi(`${API_SERVER_URL}/my-profile`);

 /**
   *    Get worker details by profile id
   */
export const getWorkerProfile  = (id:string) => getApi(`${API_SERVER_URL}/worker-profile/${id}`);