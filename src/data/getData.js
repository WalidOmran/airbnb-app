import { notFound } from "next/navigation";

export const getData = async (urlPath, options = {}) => {
  // Handle internal proxy paths directly on the server by reading FakeDB.
  // Use dynamic imports so bundler doesn't try to include Node-only modules for client code.
  if (typeof window === 'undefined' && String(urlPath).startsWith('/api/proxy')) {
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const dbPath = path.join(process.cwd(), 'src', 'FakeDB', 'db.json');
      const file = await fs.readFile(dbPath, 'utf-8');
      const json = JSON.parse(file);

      // /api/proxy/properties or /api/proxy/properties/:id
      if (urlPath.startsWith('/api/proxy/properties')) {
        const parts = urlPath.replace(/^\/+/,'').split('/');
        const last = parts[parts.length - 1];
        const id = last && last !== 'properties' ? last : undefined;
        if (id) {
          const item = (json.properties || []).find(p => String(p.id) === String(id) || String(p.id) === String(Number(id)));
          if (!item) return null;
          return item;
        }
        return json.properties || [];
      }

      // /api/proxy/cities or /api/proxy/cities/:id
      if (urlPath.startsWith('/api/proxy/cities')) {
        const parts = urlPath.replace(/^\/+/,'').split('/');
        const last = parts[parts.length - 1];
        const id = last && last !== 'cities' ? last : undefined;
        if (id) {
          const item = (json.cities || []).find(c => String(c.id) === String(id) || String(c.id) === String(Number(id)));
          if (!item) return null;
          return item;
        }
        return json.cities || [];
      }

      // /api/proxy/favorites -> not available in FakeDB; return empty array
      if (urlPath.startsWith('/api/proxy/favorites')) {
        return [];
      }
    } catch (e) {
      console.error('FakeDB fallback failed:', e);
      return null;
    }
  }

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
