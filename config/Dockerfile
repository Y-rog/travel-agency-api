FROM node:20.11.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
