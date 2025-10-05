import { notFound } from "next/navigation";

export const getData = async (url)=> {

    try {
        const res = await fetch(url, {
            next: { revalidate: 60 }
        });

        if(!res.ok) {
            notFound();
            throw new Error('Network response was not ok');
        }
        return await res.json();
    } catch (error) {
        console.error('Error featching data: ', error);
        return [];
    }

}