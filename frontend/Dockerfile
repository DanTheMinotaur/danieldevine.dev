FROM node:15-stretch AS dev

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

FROM dev AS prod 

ENV NODE_ENV "production"

RUN yarn global add http-server

RUN yarn build

ENTRYPOINT [ "http-server" ]

CMD ["/app/dist", "-p", "8080", "--brotli", "--gzip"]