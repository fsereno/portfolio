FROM node:12.22.1

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install

COPY ./app /usr/src/app

EXPOSE 3000

CMD ["gulp"]