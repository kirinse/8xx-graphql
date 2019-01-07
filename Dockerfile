FROM node:8.11.4-alpine
MAINTAINER Floyd Joe<floyd@e8bet.net>

WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
COPY src /usr/src/app

RUN npm install --production
EXPOSE 80

CMD [ "npm", "start" ]