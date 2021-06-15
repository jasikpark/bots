FROM node:16

WORKDIR /bot

COPY . .

RUN npm i
RUN npm run package

CMD ["npm", "start"]
