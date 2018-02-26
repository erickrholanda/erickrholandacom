FROM node

RUN mkdir /app

RUN cd /app

WORKDIR /app

RUN npm install -g create-react-app

CMD npm run start
