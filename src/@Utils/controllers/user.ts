import { postApi } from "@Utils/config/apis";
const API_SERVER_URL=process.env.REACT_APP_API_SERVER_URL

/**
 * Create the user
 */

export const createProfileUser=(data:any)=>postApi(`${API_SERVER_URL}/api/profile`,data);
