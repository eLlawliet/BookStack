#!/bin/bash
cp /home/site/wwwroot/default.conf /etc/nginx/sites-available/default
/usr/sbin/nginx -s reload
cd /home/site/wwwroot
php artisan migrate --force