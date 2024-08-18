FROM node:18 AS build

WORKDIR /app

RUN npm install -g npm@10.8.2

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

RUN npm install -g serve
CMD ["serve", "-s", "dist"]

EXPOSE 3000
