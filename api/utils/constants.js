module.exports = {
  PORT: process.env.PORT || 3005,
  mongoURI: "mongodb://localhost:27017/comments-api",
  bodyLimit: "100kb",
  SECRET: process.env.SECRET || "super-secret-passphrase"
};

