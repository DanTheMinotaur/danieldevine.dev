FROM node:15

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ARG NODE_ENV

ENV NODE_ENV "${NODE_ENV}"

RUN yarn build

ARG PORT

ENV PORT "${PORT}"

EXPOSE ${PORT}

CMD ["yarn", "start"]
