FROM node

WORKDIR /test-docker

ENV NAME GHINA
ENV CITY BEKASI

COPY package*.json package.json
COPY index.js index.js

RUN npm install

CMD ["npm", "run", "start"]