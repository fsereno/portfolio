FROM node:12.22.1

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g gulp && npm install

COPY . .

EXPOSE 8080

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \
 CMD node healthcheck.js

CMD ["gulp"]

# docker container run -d --name port -p 8080:8080 -v $(pwd)/app:/usr/src/app/app fabiosereno/portfolio:1.10.0
# but this only binds the app directory, problem is if there is a need to change the node build resources
# eg a gulp taks etc