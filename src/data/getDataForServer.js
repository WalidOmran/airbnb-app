/**
 * Server fetch helper for Next.js App Router.
 * @param {string} urlPath
 * @param {RequestInit} options - fetch init (headers, signal, etc.)
 * @param {{revalidate?: number, fallback?: any, throwOnError?: boolean}} opts
 * @returns {Promise<{data:any, status:number|null, error:Error|null}>}
 */
import NotFound from '@/app/not-found';
const getDataForServer = async (urlPath, options = {}, opts = {}) => {
  const { revalidate = 60, fallback = null, throwOnError = false } = opts;

  try {
    const res = await fetch(urlPath, { next: { revalidate }, ...options });
    const status = res.status;

    if (!res.ok) {
      const err = new Error(`Fetch failed: ${status} ${res.statusText}`);
      if (status === 404) { import('next/navigation').then(m => m.notFound()); }

      if (throwOnError) throw err;
      console.error(err);
      return { data: fallback, status, error: err };
    }

    const data = await res.json();
    return { data, status, error: null };
  } catch (error) {
    console.error('Error fetching data:', error);
    if (throwOnError) throw error;
    return { data: fallback, status: null, error };
  }
};

export default getDataForServer;