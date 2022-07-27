FROM node

WORKDIR /usr

COPY package.json /usr

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]