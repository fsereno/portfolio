FROM node:12.22.1

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g gulp && npm install

COPY . .

EXPOSE 8080

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \
 CMD node healthcheck.js

# docker container run -d --name port -p 8080:8080 -v $(pwd)/app:/usr/src/app/app
# -v $(pwd)/gulpfile.js:/usr/src/app/gulpfile.js fabiosereno/portfolio:1.10.0

# now with example of binding to both hot reload dir and dev build resources,
# both reflect well with instant update.