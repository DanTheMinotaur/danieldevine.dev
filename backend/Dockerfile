FROM strapi/base

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ARG NODE_ENV 

ENV NODE_ENV "${NODE_ENV}"

RUN yarn build

ARG VIRTUAL_PORT

EXPOSE ${VIRTUAL_PORT}

CMD ["yarn", "start"]