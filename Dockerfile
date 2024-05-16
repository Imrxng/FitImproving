FROM php:apache 

COPY  ./Deelproject-06/ /usr/local/apache2/htdocs/

EXPOSE 80

RUN docker-php-ext-install mysqli && apt-get update
RUN cp -r /usr/local/apache2/htdocs/* /var/www/html/