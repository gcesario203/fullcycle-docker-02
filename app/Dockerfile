FROM node:alpine as build

WORKDIR /app

COPY package.json /app

RUN npm i && \
    npm i pkg -g

COPY . /app

RUN npm run publish

FROM alpine:latest

ARG DB_HOST=mysql-db
ARG DB_PORT=3306
ARG DOCKERIZE_TIMEOUT=50s

ENV DB_HOST ${DB_HOST}
ENV DB_PORT ${DB_PORT}
ENV DOCKERIZE_TIMEOUT ${DOCKERIZE_TIMEOUT}
ENV DOCKERIZE_VERSION v0.6.1

RUN apk add --no-cache libstdc++ libgcc

WORKDIR /app

COPY --from=build /app/desafio02 /app/desafio02

RUN apk add --no-cache openssl

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENTRYPOINT dockerize -wait tcp://${DB_HOST}:${DB_PORT} -timeout ${DOCKERIZE_TIMEOUT} /app/desafio02