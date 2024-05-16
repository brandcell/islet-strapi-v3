module.exports = ({ env }) => ({
  ckeditor: true,
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      defaultLimit: 50,
      maxLimit: 50,
      apolloServer: {
        tracing: true,
      },
    },
  },

  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
