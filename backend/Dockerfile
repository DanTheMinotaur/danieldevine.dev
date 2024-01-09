FROM node:15 AS dev

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ARG NODE_ENV="development"

ENV NODE_ENV "${NODE_ENV}"

FROM dev AS prod

ENV NODE_ENV "production"

RUN yarn build

ENTRYPOINT [ "yarn" ]

CMD [ "start" ]