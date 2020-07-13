module.exports = ({ env }) => ({
  settings: getEnvSettings(env('NODE_ENV', 'development'))
})

function getEnvSettings (env) {
  try {
    return configs[env]
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
    //cors: {
    //  enabled: true,
    //  origin: 'https://dev.danieldevine.dev, https://api.dev.danieldevine.dev, http://localhost'
    //}
    // ip: {
    //   enabled: true,
    //   whiteList: ['64.43.180.189']
    // }
  }
}
