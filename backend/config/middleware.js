module.exports = ({ env }) => ({
  settings: getEnvSettings(env('NODE_ENV', 'development'))
})

function getEnvSettings (env) {
  try {
    return { ...configs.shared, ...configs[env] }
  } catch (err) {
    console.error(err)
    return configs.development
  }
}

const configs = {
  production: {
    cors: {
      enabled: true,
      origin: 'https://temp.danieldevine.dev, https://danieldevine.dev, https://api.danieldevine.dev'
    },
    xss: {
      enabled: true
    },
    csp: {
      enabled: true,
      policy: ['block-all-mixed-content']
    }
  },
  staging: {
    // ip: {
    //   enabled: true,
    //   whiteList: ['192.168.*']
    // }
  },
  development: {},
  shared: {
    gzip: {
      enabled: true
    }
  }
}
