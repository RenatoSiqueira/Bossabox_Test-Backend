FROM node:8
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]