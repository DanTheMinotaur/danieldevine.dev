FROM node:lts-alpine

# install simple http server for serving static content
RUN yarn global add http-server

WORKDIR /app

COPY package*.json ./
COPY yarn*.lock ./

RUN yarn install

COPY ./src ./src
COPY ./public ./public

RUN yarn build

EXPOSE 8080
CMD [ "http-server", "dist"]