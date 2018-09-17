FROM nginx:alpine
RUN apk add --update nodejs nodejs-npm python python-dev py-pip build-base 
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
ADD . /app
WORKDIR /app
RUN  npm install 
RUN npm rebuild node-sass --force
RUN  npm run build:dev
RUN cp -r -a  public/. /usr/share/nginx/html