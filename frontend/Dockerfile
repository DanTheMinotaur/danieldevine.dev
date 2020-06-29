FROM node:lts-alpine as build-stage

# install simple http server for serving static content
# RUN yarn global add http-server

WORKDIR /app

COPY package*.json ./
COPY yarn*.lock ./

RUN yarn install

COPY ./src ./src
COPY ./public ./public
COPY ./.env ./

RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 