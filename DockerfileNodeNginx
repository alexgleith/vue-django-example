FROM nginx:1.13.6
# Start from nginx, because when we're production, we run nginx

LABEL maintainer="aleith@crcsi.com.au"

# Install the latest node
RUN apt-get update && apt-get install -y curl gnupg2 git
RUN curl -sL https://deb.nodesource.com/setup_8.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh

RUN apt-get update && apt-get install -y nodejs build-essential

ENV APPDIR=/code
WORKDIR $APPDIR

# Install node requirements with yarn, it's better
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN  apt-get update && apt-get install -y yarn

# Do the package install
ADD package.json $APPDIR/
ADD yarn.lock $APPDIR/
RUN yarn install

# Set up Nginx
ADD build/nginx-www.conf /etc/nginx/nginx.conf
ADD build/nginx-www-default.conf /etc/nginx/conf.d/default.conf

# We need a build environment variable to switch settings with
# IMPORTANT NOTE: this is passed in, somehow, from the docker cloud build environment.
# TODO: document how it works... it's the Git branch that is building.
ARG ENVIRONMENT

# Set up the files to build with
ADD build $APPDIR/build
ADD config $APPDIR/config
ADD static $APPDIR/static
ADD .eslintrc.js $APPDIR/

# Add in the project files
ADD client $APPDIR/client

# Build
RUN npm run build

RUN rm -rf /usr/share/nginx/html && mv $APPDIR/dist /usr/share/nginx/html
RUN rm -rf $APPDIR/*

# In the case of dev, we repopulate the $APPDIR directory 
# and run from there with live sources
