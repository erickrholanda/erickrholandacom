FROM node

RUN mkdir /app

RUN cd /app

WORKDIR /app

RUN npm install -g create-react-app

RUN wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh
# RUN npm install -g heroku-cli

CMD npm run start
