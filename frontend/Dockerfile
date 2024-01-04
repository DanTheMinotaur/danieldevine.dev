FROM node:15-stretch as build-stage

# install simple http server for serving static content
RUN yarn global add http-server

WORKDIR /app

COPY package*.json ./
COPY yarn*.lock ./

RUN yarn install

COPY ./src ./src
COPY ./public ./public
COPY *.env* ./

ARG NODE_ENV

ENV NODE_ENV "${NODE_ENV}"

RUN cp ".env.${NODE_ENV}" .env
