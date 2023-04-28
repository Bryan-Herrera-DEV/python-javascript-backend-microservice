# frontend/Dockerfile
FROM node:18
COPY package*.json ./
RUN npm i --force
COPY . ./
EXPOSE 3000
CMD ["npm", "run", "dev"]