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
    config: {},
  },
  // ...
});
