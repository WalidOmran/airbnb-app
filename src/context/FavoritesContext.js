"use client";
import { Actions, favoritesReducer } from "@/reducers/favoritesReducer";
import { initialFavoritesState, apiUrl } from "@/utils/utils";
import logger from "@/utils/logger";
import { createContext, useCallback, useContext, useEffect, useReducer, useState } from "react";
import { useSession } from "next-auth/react";
import { favoriteService } from "@/services/favoriteService";
import LoginModal from "@/components/modals/LoginModal";


const FavoritesContext = createContext({});


export const FavoritesContextProvider = ({children}) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [favoritesState,favoritesDispatch ] = useReducer(favoritesReducer,initialFavoritesState);
    const { data: session } = useSession();
    const userId = session?.user?.id;
    
    const loadFavorites = useCallback(async ()=> {
        if (!userId) return;
        try {
            const data = await favoriteService.getAll(userId);
            favoritesDispatch({type: Actions.GET_FAVORITES, payload: data});

        } catch (error) {
            logger.error("Failed to load favorites", error);
        }
    },[userId]);
     // Handle Add Favorite 
    const handleAddFavorite = async (item) => {
       
       if (!userId) {
            setIsLoginModalOpen(true);
            return;
        }
        const favoriteData = { ...item, userId: userId };

        favoritesDispatch({ type: Actions.ADD_TO_FAVORITES, payload: favoriteData });

        try {
            await favoriteService.add(favoriteData);
        } catch (error) {
            logger.error("DB Add Failed", error);
        }
    }
    // Handle Remove Favorite 
    const handleRemoveFavorite = async (item) => {
            favoritesDispatch({type: Actions.REMOVE_FROM_FAVORITES, payload: item });
            try {
                await favoriteService.delete(item.id, userId);
            } catch (error) {
                logger.error("DB Remove Failed", error);
            }
    }
    useEffect(() => {
        if (!userId) {
            favoritesDispatch({ type: Actions.GET_FAVORITES, payload: [] });
        } else {
            loadFavorites();
        }
    }, [loadFavorites,userId]);
   
    
    useEffect(() => {
        localStorage.setItem('favoritesState', JSON.stringify(favoritesState));
    }, [favoritesState]);


    return (
        <FavoritesContext.Provider value={{
            favoritesState : favoritesState,
            favoritesDispatch,
            handleAddFavorite,
            handleRemoveFavorite,
            isLoginModalOpen,
            setIsLoginModalOpen


        }}>
            {children}
            <LoginModal
                isOpen={isLoginModalOpen} 
                onClose={() => setIsLoginModalOpen(false)} 
            />
        </FavoritesContext.Provider>
    )
};


export const useFavoritesContext = () =>  useContext(FavoritesContext);