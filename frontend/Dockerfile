FROM node:15-stretch AS dev

WORKDIR /app

COPY package*.json ./
COPY yarn*.lock ./

RUN yarn install

COPY ./src ./src
COPY ./public ./public
COPY *.env* ./

ARG NODE_ENV="development"

ENV NODE_ENV "${NODE_ENV}"

RUN cp ".env.${NODE_ENV}" .env

FROM dev AS prod 

ENV NODE_ENV "production"

RUN cp ".env.production" .env

RUN yarn global add http-server

RUN yarn build

ENTRYPOINT [ "http-server" ]

# --proxy option is for handling router history mode when running behind reverse proxy https://stackoverflow.com/questions/69143139/how-do-i-configure-http-server-for-history-mode-in-vue-js-2
CMD ["/app/dist", "--proxy", "http://localhost:8080?", "-p", "8080", "--brotli", "--gzip"]