import { notFound } from "next/navigation";



export const getData = async (urlPath, options = {}) => {
  try {
    const res = await fetch(urlPath, {
      ...(process.env.NODE_ENV === 'production' && {
        cache: 'no-store',
        next: { revalidate: 0 }
      }),
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
