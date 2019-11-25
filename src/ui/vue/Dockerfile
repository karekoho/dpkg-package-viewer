# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
# WORKDIR /usr/src/dpkg-viewer/client
# COPY package*.json ./
# RUN npm install
# COPY .eslint* ./
# COPY vue.config.js .
# COPY src ./src/
# COPY public ./public/
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
# RUN npm install @vue/cli@3.7.0 -g
#RUN npm install vue-template-compiler
RUN npm install @vue/cli @vue/cli-service @vue/cli-plugin-babel @vue/cli-plugin-eslint -g
RUN npm install vue-template-compiler postcss-cli autoprefixer
COPY . /app
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
#COPY --from=build-stage /usr/src/dpkg-viewer/client/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]