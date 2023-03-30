/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    HOST_DEVELOP: "http://localhost:5000",
    HOST: "https://chatic.herokuapp.com",
  },
}

module.exports = nextConfig
