import { notFound } from "next/navigation";

export const getData = async (urlPath, options = {}) => {
  try {
    const res = await fetch(urlPath, {
      next: { revalidate: 60 },
      ...options,
    });

    if (!res.ok) {
      notFound();
      throw new Error('Network response was not ok');
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null; 
  }
};