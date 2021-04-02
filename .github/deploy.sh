#!/bin/bash

cd backend || exit

docker build --build-arg NODE_ENV='production' --build-arg PORT=2010 --tag danieldevine.dev/backend:production .