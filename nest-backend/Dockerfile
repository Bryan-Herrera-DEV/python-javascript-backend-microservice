# Use la imagen oficial de Node.js como base
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# RUN npm run compile-proto

COPY proto/ /usr/src/app/proto

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]