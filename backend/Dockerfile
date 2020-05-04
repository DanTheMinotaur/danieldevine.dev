FROM node:12.16

WORKDIR /usr/src/app

ARG STRAPI_VERSION
RUN yarn global add strapi@${STRAPI_VERSION}

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY ./ ./

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]