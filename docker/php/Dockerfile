FROM php:8.3-apache

RUN apt-get update \
 && apt-get install -y libcurl4-openssl-dev \
 && docker-php-ext-install pdo pdo_mysql curl \
 && a2enmod rewrite \
 && rm -rf /var/lib/apt/lists/*
