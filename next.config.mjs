/** @type {import('next').NextConfig} */
const nextConfig = {
   productionBrowserSourceMaps: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'airbnb-json-db.vercel.app', 
      },
      
      {
        protocol: 'https',
        hostname: 'www.bigfootdigital.co.uk',
      
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com', 
      }
    ],
  },
};

export default nextConfig;
