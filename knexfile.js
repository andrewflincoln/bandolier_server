module.exports = {


  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/bandolier_dev',
    migrations: {
      directory: `/home/andrew/Documents/Galvanize/bandolier-server/db/migrations`

    },
    seeds: {
      directory: `/home/andrew/Documents/Galvanize/bandolier-server/db/seeds`
    }
  },

  test: {
    client: 'postgresql',
    connection: 'postgresql://localhost/bandolier_test',
    migrations: {
      directory: `/home/andrew/Documents/Galvanize/bandolier-server/db/migrations`
    },
    seeds: {
      directory: `/home/andrew/Documents/Galvanize/bandolier-server/db/seeds`
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: __dirname + '/db/migrations',
    },
    seeds: {
        directory: __dirname + '/db/seeds',
    },
},

}


//Created postgresql-solid-79588 as DATABASE_URL
