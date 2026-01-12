module.exports = {
  routes: [
    {
      method: "POST",
      path: "/go-live/trigger",
      handler: "go-live.trigger",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
