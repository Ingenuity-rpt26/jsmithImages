FROM node:14-alpine
WORKDIR /jsmithImages
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]