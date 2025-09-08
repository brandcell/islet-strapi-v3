module.exports = ({ env }) => ({
  ckeditor: true,
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
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
      provider: "@nexide/strapi-provider-bunny",
      providerOptions: {
        api_key: env("BUNNY_API_KEY"),
        storage_zone: env("BUNNY_STORAGE_ZONE"),
        pull_zone: env("BUNNY_PULL_ZONE"),
        hostname: env("BUNNY_HOSTNAME"),
        upload_path: env("BUNNY_UPLOAD_PATH"),
      },
    },
  },
  // ...
});
