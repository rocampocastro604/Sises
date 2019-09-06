FROM node:12.7.0

LABEL version="1.0"
LABEL description="Web app Twitter-like"
LABEL maintainer="Daniel Hernandez - dehernands@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install --test

EXPOSE 3000
CMD npm start
