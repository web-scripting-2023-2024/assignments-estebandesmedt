#!/bin/sh
echo "Replacing ENV vars before starting nginx"
for file in /usr/share/nginx/html/assets/*.js;
do
  if [ ! -f $file.tmpl.js ]; then
    cp $file $file.tmpl.js
  fi
  envsubst '$VUE_APP_API_HOST' < $file.tmpl.js > $file
done

exit 0