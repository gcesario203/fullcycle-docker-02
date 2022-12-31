FROM node:alpine as build

WORKDIR /app

COPY ./app /app

RUN npm i && \
    npm i pkg -g && \
    npm run publish

FROM alpine:latest

RUN apk add --no-cache libstdc++ libgcc

WORKDIR /app

COPY --from=build /app/desafio02 /app/desafio02

ENTRYPOINT ["/app/desafio02"]