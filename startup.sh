#!/bin/bash
# 1. Copy Nginx configuration
cp /home/site/wwwroot/default.conf /etc/nginx/sites-available/default
/usr/sbin/nginx -s reload

# 2. Navigate to application root
cd /home/site/wwwroot

# 3. FORCE REMOVE any old local configuration cache files
rm -f bootstrap/cache/*.php

# 4. Create missing Laravel framework storage directories
mkdir -p storage/framework/cache/data
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/app/public

# 5. Clear any remaining internal caches cleanly
php artisan config:clear
php artisan view:clear
php artisan cache:clear

# 6. Run database migrations
php artisan migrate --force