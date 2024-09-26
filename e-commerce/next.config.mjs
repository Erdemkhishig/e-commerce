/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API: process.env.API
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;
