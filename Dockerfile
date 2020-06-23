FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY ./yarn.lock .

COPY . .

EXPOSE 3000

CMD [ "node", "src/server.js" ]
