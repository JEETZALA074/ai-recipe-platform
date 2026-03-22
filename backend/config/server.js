module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", 1337),
  url: "https://ai-recipe-platform.onrender.com",
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});