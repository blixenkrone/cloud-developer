FROM node:12

ENV HOME=/home/udagram/

COPY package*.json $HOME/app/

COPY src/ $HOME/app/src

WORKDIR $HOME/app

RUN npm install

COPY . .

CMD ["node", "server.js"]
