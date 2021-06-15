FROM node:16

WORKDIR /bot

COPY . .

RUN npm i

CMD ["npm", "start"]
