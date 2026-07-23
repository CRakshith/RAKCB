FROM nginx:latest

WORKDIR /app

COPY index.html /var/www/html/index.html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]