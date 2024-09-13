FROM node:alpine

WORKDIR /app

EXPOSE 3002

COPY ./ ./

RUN npm i

CMD [ "node", "server.js" ]