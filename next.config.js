module.exports = {
  target: "serverless",
  env: {
    // API_CLIENT_ID: 4,
    // API_CLIENT_SECRET: "Xo7E8Qg278sbZ61d66aSAzkdTTbMGsHoCpj5aIj6",
    API_CLIENT_ID: 1,
    API_CLIENT_SECRET: "Rn7H9fwF5g8IVZEHVIXL8wfWgUMn2lBiU6HBxUEv",
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
