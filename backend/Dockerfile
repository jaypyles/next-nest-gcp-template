FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY src nest-cli.json tsconfig.build.json tsconfig.json /app/
RUN npm run build

EXPOSE 8000