FROM node:12.22.1

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install -g gulp && npm install

COPY . .

EXPOSE 8080

HEALTHCHECK CMD gulp --version || exit 1

CMD ["gulp"]