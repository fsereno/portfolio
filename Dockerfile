FROM node:12.22.1

WORKDIR /usr/src/app

COPY package.json package-lock.json healthcheck.js ./

RUN npm install -g gulp && npm install

EXPOSE 8080

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \
 CMD node healthcheck.js