'use client';
import { Actions, favoritesReducer } from "@/reducers/favoritesReducer";
import { initialFavoritesState } from "@/utils/utils";
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
const FavoritesContext = createContext({});


export const FavoritesContextProvider = ({children}) => {
    const FavoritesURLpath = "http://localhost:9000/favorites";
    const [favoritesState,favoritesDispatch ] = useReducer(favoritesReducer,initialFavoritesState);
    // Add To Api
    const AddItemToDB = async (URLpath,item) => {

        try {
            const res = await axios.post(URLpath,item);
            if(res.status === 200 || res.status ===201) {
                console.log("Item added to DB");
            }else {
                console.log("err:" + res.statusText);
            }
        } catch (error) {
            console.log("error : ", error);
        }
    }
    // Remove From Api
    const RemoveItemFromDB = async (URLpath,itemId) => {
        try {
            const res = await axios.delete(`${URLpath}/${itemId}`);
            if(res.status === 200 || res.status === 204) {
                console.log("Item removed from DB");
            }else {
                console.log("err :" + res.statusText);
            }
        } catch (error) {
            console.log("err : " + error);
        }
        
    }
     // Handle Add Favorite 
    const handleAddFavorite = (item) => {
       // setIsFavorite(true);
        favoritesDispatch({ type: Actions.ADD_TO_FAVORITES, payload: item });
        AddItemToDB(FavoritesURLpath,item);
    }
    // Handle Remove Favorite 
    const handleRemoveFavorite = (item) => {
            // setIsFavorite(false);
            favoritesDispatch({type: Actions.REMOVE_FROM_FAVORITES, payload: item });
            RemoveItemFromDB(FavoritesURLpath, item.id);
    }

    const initialLoadFavorites =   async (URLpath) => {
        try {
            const res = await axios.get(FavoritesURLpath);
            if(res.status === 200) {
                const data = res.data;
                favoritesDispatch({type: Actions.GET_FAVORITES , payload: data});
            }else {
                console.log('err :' + res.statusText);
            }
        } catch (error) {
            console.log("error :  " , error);
        }
    }
    useEffect( ()=> {

        initialLoadFavorites(FavoritesURLpath);

        localStorage.setItem('favoritesState', JSON.stringify(favoritesState));

    },[]);
    return (
        <FavoritesContext.Provider value={{
            favoritesState : favoritesState,
            favoritesDispatch,
            handleAddFavorite,
            handleRemoveFavorite


        }}>
            {children}
        </FavoritesContext.Provider>
    )
};


export const useFavoritesContext = () =>  useContext(FavoritesContext);