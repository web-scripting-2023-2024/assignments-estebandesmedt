# Development Stage
FROM node:18.16-alpine3.17 as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build Stage
FROM develop-stage as build-stage
RUN npm run build

# Production Stage
FROM nginx:1.25.1-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY vue-env-replace.sh /docker-entrypoint.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]