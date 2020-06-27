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

EXPOSE 7000
CMD [ "http-server", "-p 7000", "dist"]