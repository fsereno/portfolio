FROM node:14.17.5

WORKDIR /usr/src/app

COPY package.json package-lock.json healthcheck.js ./

RUN apt-get update && apt-get install -y \
    libnss3-dev \
    libgdk-pixbuf2.0-dev \
    libgtk-3-dev \
    libxss-dev \
    libnss3 \
    libasound2 \*

RUN npm install -g gulp && npm install

EXPOSE 8080

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \
 CMD node healthcheck.js