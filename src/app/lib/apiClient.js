import logger from "@/utils/logger";
import axios from 'axios';

export const apiRequest = async (urlPath, options={}) => {
    const method = options.method || 'GET';

    try {
        const defaultOptions = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...(process.env.NODE_ENV === 'production' && method === 'GET' && {
                cache: 'no-store',
                next: {revalidate: 0}
            }),
            ...options,
        };

        const res = await fetch(urlPath, defaultOptions);

        if( res.status === 204 ) return true;

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
        }


        return await res.json();
    } catch (error) {
        logger.error(`Error during ${method} request to ${urlPath}:`, error);
        throw error;
    }
}


export const apiRequestByAxios = async (urlPath, config = {}, throwOnError = false) => {
    const method = config.method || 'get';
    
  try {
    const res = await axios({
        url: urlPath,
        method : method.toLowerCase(),
        ...config
    });
    return res.data;


  } catch (error) {
    const status = error?.response?.status ?? null;
    const errorMessage = error?.response?.data?.message || error.message;

    logger.error(`apiRequestByAxios Error [${status}]: `, error);
    if (throwOnError) {
        const customError = new Error(errorMessage);
        customError.status = status;

        throw customError;

        };
    return {data: null,  status, error: errorMessage };
  }
};