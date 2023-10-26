# frontend

Vue.js based front end. 

## Pre-requisits
Node V15
Python 2.7

## docker-compose

```shell
NODE_ENV=production docker-compose up
```



## Issues

### node-sass v4

This requires Python 2.7, it needs to be installed somewhere on the path. 

```shell
pyenv install 2.7.18
```

This should then be 

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/env/).

Needs to use .env file, can't use system variables. 

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

