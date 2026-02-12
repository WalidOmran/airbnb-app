'use client';
import { initialSearchData } from "@/constants/searchConstants";
import { searchReducer } from "@/reducers/searchReducer";
import { createContext, useContext, useReducer } from "react";


const SearchContext = createContext(null);


export const SearchProvider = ({children}) => {
    const [searchData,searchDispatch] = useReducer(searchReducer,initialSearchData);

    return (
        <SearchContext.Provider value={{
            searchData,
            searchDispatch
        }}>
            {children}
        </SearchContext.Provider>
    )
}


export const useSearch = ()=> {
      const context = useContext(SearchContext);
      if (!context) {
        throw new Error('useSearch must be used with in SearchProvider');
      }
      return context;
}