FROM node:8.11.4-alpine
MAINTAINER Floyd Joe<floyd@e8bet.net>

WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
COPY src /usr/src/app/src

RUN npm install --production
EXPOSE 4000

CMD [ "npm", "run", "prod" ]