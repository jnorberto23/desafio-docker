FROM node:18-alpine

WORKDIR /usr/app/node

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "main.js" ]