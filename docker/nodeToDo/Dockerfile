FROM --platform=linux/amd64 node:18.14.2 AS base

WORKDIR /app

ENV APP_DIR="app_nodeToDo"

COPY ["/app/${APP_DIR}/backend/api", "./"]

RUN npm install

FROM base AS final

RUN apt-get update \
    && apt-get install -y curl

HEALTHCHECK --interval=5s --timeout=10s --retries=3 CMD curl --fail curl http://localhost:3006/healthcheck || exit 1

ENTRYPOINT ["node", "index.js"]