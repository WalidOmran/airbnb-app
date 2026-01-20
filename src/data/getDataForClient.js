/**
 * Client fetch helper using axios.
 *
 */
import axios from 'axios';
import logger from "@/utils/logger";

const getDataForClient = async (urlPath, config = {}, throwOnError = false) => {
  try {
    const res = await axios.get(urlPath, config);
    const status = res.status;
    const data = res.data;

    return { data, status, error: null };
  } catch (error) {
    const status = error?.response?.status ?? null;
    logger.error('getDataForClient error:', error);

    if (throwOnError) throw error;
    return { status, error };
  }
};

export default getDataForClient;
