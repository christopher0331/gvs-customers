/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: ['greenviewsolutions.net', 'imagedelivery.net'],
  },
}

module.exports = nextConfig 