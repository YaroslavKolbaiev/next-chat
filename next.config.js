/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    HOST: "https://chatic.herokuapp.com",
    HOST_DEVELOP: " http://localhost:5000",
  },
}

module.exports = nextConfig
