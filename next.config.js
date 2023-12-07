/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    HOST_DEVELOP: "http://localhost:5000",
    HOST: "https://chat-app-service-vsdq62nw3a-lm.a.run.app",
  },
}

module.exports = nextConfig
