# BUILD
FROM node:14 AS build

WORKDIR /home/node

COPY package.json .
COPY yarn.lock .
RUN yarn install --production

COPY . .

RUN yarn run build

# DEPLOY
FROM nginx:1.20.1-alpine AS deploy

WORKDIR /usr/share/nginx/html

COPY --from=build /home/node/build .

EXPOSE 80
