FROM node:lts-alpine

WORKDIR /app

COPY . ./

RUN npm i -g pnpm
RUN pnpm i

EXPOSE 8082

CMD [ "pnpm", "run", "dev" ]
