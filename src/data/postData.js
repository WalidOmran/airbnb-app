'use client';
import axios from "axios";
import { toast } from "sonner";
import logger from "@/utils/logger";


export const  PostData = async (apiUrl,newItem)=>{

   await axios.post(apiUrl,newItem)
   .then(
    res =>  {
            toast.success('The reservation was successful ! 🎉');
        }

).catch((error) => logger.error(error));
}


