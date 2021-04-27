module.exports = {
  target: "serverless",
  env: {
    API_CLIENT_ID: 4,
    API_CLIENT_SECRET: "cQv9I9Aix4IMBDGIoJLtCk0N228JSgjiGmZgS8AE",
    // API_CLIENT_ID: 1,
    // API_CLIENT_SECRET: "WIZxGR16ynvUJjgkKVJkyb9VN5kkpydnznypSvTZ",
    SITE_URL:"https://fabloop-aptvkij0k-akarin-git.vercel.app/",
    // SITE_URL:"https://fabloop-4v39w65ht-akarin-git.vercel.app/",
  },
  future: {
    webpack5: true,
  },
  images: {
        domains: ["res.cloudinary.com"],
        // loader: 'cloudinary', // Cloudinaryを使う場合
        // path: 'cloudinary://374799731754153:2OtB2k3mhUmXQi4pqdO7JkZaYcc@dk2uwbtnl', // CloudinaryのURLベース
      },
};
