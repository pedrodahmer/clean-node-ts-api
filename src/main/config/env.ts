export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost/clean-node-api',
  port: process.env.port ?? 5050
}
