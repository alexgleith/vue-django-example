FROM nginx:1.13.3
# Start from nginx, the same as for web

LABEL maintainer="aleith@crcsi.com.au"

# Set up Nginx
ADD build/nginx-www.conf /etc/nginx/nginx.conf
ADD build-api/nginx-api-default.conf /etc/nginx/conf.d/default.conf

ENV APPDIR=/code
WORKDIR $APPDIR

# Note that static files from django are served from /code/staticfiles
