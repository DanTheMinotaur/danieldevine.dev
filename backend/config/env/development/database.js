module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT', 'sqlite3'),
        filename: env('DATABASE_FILENAME', '.tmp/db.sqlite'),
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', '')
      },
      options: {
        useNullAsDefault: true
      }
    }
  }
})
