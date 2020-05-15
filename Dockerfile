From node:current-alpine3.10

RUN mkdir /src/app
# need to load app to container, assume app on host local storage
COPY . /src/app

WORKDIR /src/app

RUN yarn install

EXPOSE 3000

CMD ["npm", "start"]