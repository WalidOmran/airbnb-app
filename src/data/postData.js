'use client';
import axios from "axios";
import { toast } from "sonner";


export const  PostData = async (apiUrl,newItem)=>{

   await axios.post(apiUrl,newItem)
   .then(
    res =>  {
            toast.success('The reservation was successful ! 🎉');
            // console.log("Add is Ok")
        }

).catch((error) => console.log(error));
}