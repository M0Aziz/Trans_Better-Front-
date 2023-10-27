FROM node:18.10

WORKDIR /usr/src/angular

COPY package*.json ./

RUN npm config set fetch-retries 5
RUN npm install

COPY . .


EXPOSE 4200

CMD ["npm", "start"]
