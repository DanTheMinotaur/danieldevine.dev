#!/bin/sh
echo "Building for $1 environment"
cd ${$2}/frontend

echo -e "VUE_APP_GRAPHQL_URL:$3" >> .env
echo -e "VUE_APP_API_URL:$4" >> .env
echo -e "VIRTUAL_HOST:$5" >> .env
echo -e "VIRTUAL_PORT:$6" >> .env
echo -e "LETSENCRYPT_HOST:$7" >> .env

docker-compose down
docker-compose up --build -d