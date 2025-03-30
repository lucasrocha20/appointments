FROM node:22.14-alpine

USER node

RUN mkdir -p /home/node/app/ && chown -R node:node /home/node/app

ENV NODE_ENV development

WORKDIR /home/node/app

# COPY --chown=node:node package*.json .
COPY --chown=node:node ["package.json", "package-lock.json", "./"]

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# RUN npm install

COPY --chown=node:node . .

EXPOSE 3333

CMD ["npm", "run", "dev"]