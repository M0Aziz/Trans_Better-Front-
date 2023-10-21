FROM node:16.14.2

WORKDIR /usr/src/angular

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
