/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // image host name:
  images: {
    domains: [
      "api-blog.jstemplate.net",
      "lh1.googleusercontent.com",
      "lh2.googleusercontent.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "h6.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
