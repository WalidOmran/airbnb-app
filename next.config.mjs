/** @type {import('next').NextConfig} */
const nextConfig = {
   productionBrowserSourceMaps: true,
    images: {
    remotePatterns: [
      
      {
        protocol: 'https',
        hostname: 'www.bigfootdigital.co.uk',
      
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        // pathname: '/**',
      },
    
    ],
  },
};

export default nextConfig;
