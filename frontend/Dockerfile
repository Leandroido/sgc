FROM node:20.12.0-alpine3.19

COPY . ./
RUN npm i -g pnpm
RUN pnpm i

CMD pnpm run dev
