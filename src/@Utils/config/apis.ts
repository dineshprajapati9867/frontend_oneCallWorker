import axios from 'axios';
const API_SERVER_URL=""
const API=""
//const LocalStorage = LocalStorageService.getService();

//axios.defaults.headers.common.Authorization = `Bearer ${LocalStorage.getAccessToken()}`;

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

export const bucketUpload = async (file: any, fileName: any, extension: string) => {
  try {
    const { data: signedUrlInfo } = await postApi(
      `${API}?fileName=${fileName}&extension=${extension}`,
      {},
    );

    const requestOptions = {
      method: 'PUT',
      body: file,
    };

    await fetch(signedUrlInfo.uploadUrl, requestOptions);
    return signedUrlInfo.uploadKey;
  } catch (err) {
    // console.log(err, 'error from upload');
  }
  return undefined;
};

/**
 * Uploads a file to the bucket and returns the key that can be used to access it.
 * @param {any} file - the file to upload
 * @param {string} fileName - the name of the file
 * @param {string} extension - the extension of the file
 * @returns {string} the key that can be used to access the file
 */
export const uploadFile = async (data: any, key: string) => {
  const file = data[key];

  if (!file) {
    data[key] = '';
    return data;
  }

  if (file?.url !== undefined) {
    data[key] = file.name;
  } else if (file?.type && file.type.includes('image')) {
    const fileName = file.name.replace(/\.[^/.]+$/, '');
    const extension = file.name.split('.').pop();

    const uploadKey = await bucketUpload(file, fileName, extension);
    data[key] = uploadKey;
  } else if (file?.type && file.type.includes('pdf')) {
    const fileName = file.name.replace(/\.[^/.]+$/, '');
    const extension = 'pdf';

    const uploadKey = await bucketUpload(file, fileName, extension);
    data[key] = uploadKey;
  }
  return data;
};

/**
 * Uploads a file to the bucket and returns the key of the file.
 * @param {any} file - the file to upload
 * @param {string} fileName - the name of the file
 * @param {string} extension - the extension of the file
 * @returns {string} the key of the file
 */
export const uploadMultipleFile = (data: any, key: string) => {
  const fileArray = data[key];
  const uploadedFiles = fileArray.map(async (file: any) => {
    if (file?.url !== undefined) {
      return file?.name;
    }
    if (file?.type && file.type.includes('image')) {
      const fileName = file.name.replace(/\.[^/.]+$/, '');
      const extension = file.name.split('.').pop();

      const uploadKey = await bucketUpload(file, fileName, extension);
      return uploadKey;
    }
    if (file?.type && file.type.includes('pdf')) {
      const fileName = file.name.replace(/\.[^/.]+$/, '');
      const extension = 'pdf';

      const uploadKey = await bucketUpload(file, fileName, extension);
      return uploadKey;
    }
    return '';
  });
  return Promise.all(uploadedFiles);
};
