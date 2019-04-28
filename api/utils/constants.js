module.exports = {
  PORT: process.env.PORT || 9090,
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost:27017/comments-api",
  bodyLimit: "100kb",
  SECRET: process.env.SECRET || "super-secret-passphrase"
};

