const env = process.env.NODE_ENV || 'development'

const config = {
    staging: {
        VUE_APP_API_URL: 'https://api.dev.danieldevine.dev',
        VUE_APP_GRAPHQL_URL: 'https://api.dev.danieldevine.dev/graphql'
    },
    production: {
        VUE_APP_API_URL: 'https://api.danieldevine.dev',
        VUE_APP_GRAPHQL_URL: 'https://api.danieldevine.dev/graphql'
    },
    development: {
        VUE_APP_API_URL: 'http://localhost:1337',
        VUE_APP_GRAPHQL_URL: 'http://localhost:1337/graphql'
    }
}

module.exports = config[env]