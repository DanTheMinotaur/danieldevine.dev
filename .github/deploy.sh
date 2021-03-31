#!/bin/bash

cd $2

git pull

git checkout $1


echo "Building for $1 front end environment"
cd $2/frontend && docker-compose -f docker-compose-$1.yml up --build -d 

echo "Building for $1 back end environment"
cd $2/backend && docker-compose -f docker-compose-$1.yml up --build -d 

docker build --build-arg NODE_ENV='staging' --build-arg PORT=1337  .

docker build --build-arg NODE_ENV='staging' --build-arg PORT=1337 --tag danieldevine.dev/backend:staging .