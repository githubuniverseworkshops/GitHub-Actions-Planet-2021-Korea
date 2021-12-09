FROM ghcr.io/githubuniverseworkshops/node:latest

WORKDIR /app

COPY ["package.json","package-lock.json*","./"]

RUN npm install

COPY . .

CMD ["npm","start"]
