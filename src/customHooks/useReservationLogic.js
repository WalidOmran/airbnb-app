import { useReducer, useState, useCallback, useMemo } from "react";
import { reservationReducer } from "@/reducers/reservationReducer";
import { initialReservationData } from "@/constants/reservationConstants";
import { calcNights, calcTotalPrice } from "@/utils/reservationUtils"; 

export const useReservationLogic = () => {
    const [reservationData, reservationDispatch] = useReducer(reservationReducer, initialReservationData);
    const [refreshKey, setRefreshKey] = useState(0);

    const triggerRefresh = useCallback(() => setRefreshKey(prev => prev + 1), []);

    return useMemo(()=> ({
        reservationData,
        reservationDispatch,
        refreshKey,
        triggerRefresh,
        calcNights,
        calcTotalPrice
    }),[reservationData, refreshKey, triggerRefresh]);
};