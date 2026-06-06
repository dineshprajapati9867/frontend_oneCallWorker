import axios from 'axios';
const API_SERVER_URL=""
const API=""

//axios.defaults.headers.common.Authorization = `Bearer ${ localStorage.getItem("token")}`;

/**
 * Gets the API data from the server.
 * @param {string} url - the url to get the data from.
 * @returns {Promise<AxiosResponse<any>>} - the data from the server.
 */
export const getApi = (url: any) => axios.get(API_SERVER_URL + url);

/**
 * Posts data to the API server.
 * @param {string} url - the url to post to.
 * @param {any} data - the data to post.
 * @param {boolean} [shortUrl=true] - whether or not to use the short url.
 * @returns None
 */
export const postApi = (url: any, data: any, shortUrl: boolean = true) =>
  axios.post((shortUrl ? API_SERVER_URL : '') + url, data);

/**
 * Sends a PUT request to the API server.
 * @param {string} url - the url to send the request to.
 * @param {any} [data] - the data to send with the request.
 * @param {boolean} [shortUrl=true] - whether or not to use the short url.
 * @returns None
 */
export const putApi = (url: any, data?: any, shortUrl: boolean = true) =>
  axios.put((shortUrl ? API_SERVER_URL : '') + url, data);

/**
 * Deletes the given url from the API server.
 * @param {string} url - the url to delete from the API server.
 * @returns None
 */
export const deleteApi = (url: any) => axios.delete(API_SERVER_URL + url);
