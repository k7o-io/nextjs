FROM node:16.3.0@sha256:e74d46c2d4b711c7fbdc8c26a35fbb40d9a739ef23b6e84b0ec3917ef01b23b4 as base
WORKDIR /app
COPY package.json yarn.lock ./

FROM base as dev

FROM base as build
RUN yarn install
COPY . ./
RUN yarn run format
RUN yarn run lint
RUN yarn run build

FROM base as prod
COPY --from=build /app/node_modules/ ./node_modules/
COPY --from=build /app/public/ ./public/
COPY --from=build /app/.next/ ./.next/
EXPOSE 3000
CMD ["yarn", "start"]