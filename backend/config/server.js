module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('VIRTUAL_PORT', 1337),
  admin: {
    url: 'dash'
  }
})
