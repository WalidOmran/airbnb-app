import getDataForServer from "@/data/getDataForServer";
import { apiUrl } from "@/utils/utils";

/**
 * Server helper to fetch properties.
 * Use in Server Components: const { data } = await getPropertiesForServer({ fallback: [], revalidate: 120 });
 */
const getPropertiesForServer = async (opts = {}) => {
  const result = await getDataForServer(`${apiUrl}/properties`, {}, opts);
  return result; // { data, status, error }
};

export default getPropertiesForServer;