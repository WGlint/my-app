/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "img.freepik.com",
                protocol: "https",
            },
            {
                hostname: "directus-production-ab09.up.railway.app",
                protocol: "https",
            }
        ]
    }
}

module.exports = nextConfig
