import { getData } from "@/data/getData";
import { apiUrl } from "@/utils/utils";

const { useContext, createContext } = require("react");

const PropertiesContext = createContext([]);


export const PropertiesContextProvider = async ({children}) => {
    const properties = await getData(`${apiUrl}/properties`);
    return (
        <PropertiesContext.Provider value={{properties}}>
            {children}
        </PropertiesContext.Provider>
    )
}



export const usePropertiesContext = () => useContext(PropertiesContext);