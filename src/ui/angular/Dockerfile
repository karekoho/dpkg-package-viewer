FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN ./node_modules/@angular/cli/bin/ng build --prod

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist/angular /app
COPY nginx.conf /etc/nginx/nginx.conf