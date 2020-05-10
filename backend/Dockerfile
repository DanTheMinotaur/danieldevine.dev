FROM strapi/base

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ARG ENVIRONMENT

ENV NODE_ENV "${ENVIRONMENT}"

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]