"use client";

import { reservationService } from "@/services/reservationService";
import { useSession } from "next-auth/react";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const useManageReservations = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [bookings, setBookings] = useState([]);
    const { data: session } = useSession();
    const userId = session?.user?.id;
    
    const fetchBookings = useCallback(async () => {
        if (!userId) return;
        try {
          setIsLoading(true);
          const data = await reservationService.getUserReservations(userId);
          setBookings(data);
        } catch (error) {
          console.error("Error fetching bookings:", error);
        } finally {
          setIsLoading(false);
        }
      }, [userId]);


    const handleDelete = async () => {
    
        if (!selectedId) return;
       
            try {
                setIsDeleting(true);

                await reservationService.delete(selectedId);
                setBookings(prev => prev.filter(booking => booking.id !== selectedId));
                toast.success("Reservation cancelled successfully");
                // await fetchBookings();
                setSelectedId(null);
            } catch (error) {
                console.error("Failed to delete:", error);
                toast.error("Something went wrong!");
            }finally {
            setIsDeleting(false);
        }
        
    };


   useEffect(() => {
        fetchBookings();
    }, [fetchBookings]);
    


  return { 
        bookings, 
        isLoading, 
        isDeleting, 
        selectedId, 
        setSelectedId, 
        handleDelete, 
        fetchBookings
     };
}

export default useManageReservations
