import logger from "@/utils/logger";

export const apiRequest = async (urlPath, options={}) => {
    const method = options.method || 'GET';


    // if( typeof window === 'undefined' && String(urlPath).startsWith('/api/proxy') && method === 'GET') {
    //     try {
    //         const fs = await import('fs/promises');
    //         const path = await import('path');
    //         const dbPath = path.join(process.cwd(), 'src', 'FakeDB', 'db.json');
    //         const file = await fs.readFile(dbPath, 'utf-8');
    //         const json = JSON.parse(file);
      
    //         // منطق استخراج البيانات من الـ JSON (نفس كودك السابق)
    //         if (urlPath.includes('/properties')) {
    //           const id = urlPath.split('/').pop();
    //           if (id && id !== 'properties') {
    //             return (json.properties || []).find(p => String(p.id) === String(id)) || null;
    //           }
    //           return json.properties || [];
    //         }
    //         // يمكنك إضافة باقي المسارات هنا (cities, favorites...)
    //       } catch (e) {
    //         console.error('FakeDB fallback failed:', e);
    //       }
        
    // }

    try {
        const defaultOptions = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...(process.env.NODE_ENV === 'production' && method === 'GET' && {
                cache: 'no-store',
                next: {revalidate: 0}
            }),
            ...options,
        };

        const res = await fetch(urlPath, defaultOptions);

        if( res.status === 204 ) return true;
        if(!res.ok) return null;

        return await res.json();
    } catch (error) {
        logger.error(`Error during ${method} request to ${urlPath}:`, error);
        return null;
    }
}