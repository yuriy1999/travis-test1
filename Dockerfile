FROM node:8.9-alpine

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY . /api

CMD ["npm", "run", "start"]