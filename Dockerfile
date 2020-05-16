From node:current-alpine3.10

RUN mkdir -p /src/app

COPY . /src/app

WORKDIR /src/app

RUN yarn install

EXPOSE 3000

CMD ["npm", "start"]