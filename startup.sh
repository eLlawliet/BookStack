#!/bin/bash
cp /home/site/wwwroot/default.conf /etc/nginx/sites-available/default
/usr/sbin/nginx -s reload

cd /home/site/wwwroot

mkdir -p storage/framework/cache/data
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/app/public

php artisan config:clear
php artisan view:clear
php artisan cache:clear

php artisan migrate --force