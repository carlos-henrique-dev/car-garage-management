FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR ./build

EXPOSE 3001

CMD node src/index.js