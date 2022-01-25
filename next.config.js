/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
    basePath: '/home',
}

module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home', // Matched parameters can be used in the destination
                permanent: true,
            },
        ]
    },
}

module.exports = {
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
  }
