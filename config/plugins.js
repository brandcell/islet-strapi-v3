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
  "mux-video-uploader": {
    enabled: true,
    config: {
      accessTokenId: env('ACCESS_TOKEN_ID'),
      secretKey: env('ACCESS_TOKEN_SECRET'),
      webhookSigningSecret: env('WEBHOOK_SIGNING_SECRET'),
      // playbackSigningId: env('SIGNING_KEY_ID'),
      // playbackSigningSecret: env('SIGNING_KEY_PRIVATE_KEY'),
    }
  }
  // ...
});
