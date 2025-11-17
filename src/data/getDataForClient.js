/**
 * Client fetch helper using axios.
 * @param {string} urlPath
 * @param {object} axiosConfig - axios request config (headers, params, etc.)
 * @param {{fallback?: any, throwOnError?: boolean, timeout?: number}} opts
 * @returns {Promise<{data:any, status:number|null, error:Error|null}>}
 */
import axios from 'axios';

const getDataForClient = async (urlPath, axiosConfig = {}, opts = {}) => {
  const { fallback = null, throwOnError = false, timeout = 10000 } = opts;

  try {
    const config = { timeout, ...axiosConfig };
    const res = await axios.get(urlPath, config);
    const status = res.status;
    const data = res.data;

    return { data, status, error: null };
  } catch (error) {
    const status = error?.response?.status ?? null;
    console.error('getDataForClient error:', error);

    if (throwOnError) throw error;
    return { data: fallback, status, error };
  }
};

export default getDataForClient;