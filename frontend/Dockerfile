FROM node:14 as build-stage

# install simple http server for serving static content
# RUN yarn global add http-server

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

RUN yarn build --mode "$NODE_ENV"

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 