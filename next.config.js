/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // image host name:
  images: {

    domains: [
      'jstemplate.net',
      'res.cloudinary.com',
      'via.placeholder.com',
      'api-blog.jstemplate.net',
      'lh1.googleusercontent.com',
      'lh2.googleusercontent.com',
      'lh3.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'h6.googleusercontent.com',
      "secure.gravatar.com",
    ],
  },
  eslint: {
    dirs: [ 'pages', 'components' ],
  },
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
