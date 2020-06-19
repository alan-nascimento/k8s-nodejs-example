FROM node:lts-alpine as builder

COPY package.json yarn.lock ./
RUN yarn install --only=prod&& mkdir /react-frontend && mv ./node_modules ./react-frontend

WORKDIR /react-frontend

COPY . .

RUN yarn build

EXPOSE 3000
