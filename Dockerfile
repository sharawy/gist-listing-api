FROM nginx:alpine
RUN apk add --update nodejs nodejs-npm python python-dev py-pip build-base 
ADD . /app
WORKDIR /app
RUN  npm install 
RUN npm rebuild node-sass --force
RUN  npm run build:dev
RUN cp -r -a  public/. /usr/share/nginx/html