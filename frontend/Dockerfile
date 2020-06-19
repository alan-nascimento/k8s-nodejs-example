FROM node:lts-alpine as builder

COPY ./package.json .

RUN yarn install

COPY ./yarn.lock .

COPY ./build /var/www/html

WORKDIR /var/www/html

EXPOSE 3000
