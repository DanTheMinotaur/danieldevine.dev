#!/bin/bash
git checkout $1

git pull

echo "Building for $1 front end environment"
cd ${$2}/frontend && docker-compose down && docker-compose up --build -d

echo "Building for $1 back end environment"
cd ${$2}/backend && docker-compose down && docker-compose up --build -d

