module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceu9olirrk0bnktbuojg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'parrillando'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'KMd0LGXCDWHGqjTkMud6ULTvIFqcXdR1'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
