if (process.env.ENV)
  require("dotenv").config({ path: `./.env.${process.env.ENV}` });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    MESSAGING_SENDER: process.env.MESSAGING_SENDER,
    APP_ID: process.env.APP_ID,
  },

  images: {
    domains: ["image.tmdb.org"],
  },

  // runtime: "experimental-edge",
};

module.exports = nextConfig;
