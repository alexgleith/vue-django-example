FROM ubuntu:16.04
# Changed to Ubuntu so that we can install GDAL easier

LABEL maintainer="aleith@crcsi.com.au"

# Let's get us some UbuntuGIS
RUN apt-get update && apt-get install -y python-software-properties software-properties-common
RUN add-apt-repository ppa:ubuntugis/ubuntugis-unstable

# Install all the bits
RUN apt-get update && apt-get install -y python3 python3-pip binutils libproj-dev gdal-bin python3-gdal postgresql

# Store the app directory, so we can change it if we want
ENV APPDIR=/code
WORKDIR $APPDIR

# Get all the python libraries
ADD requirements.txt /tmp/requirements.txt
RUN pip3 install -r /tmp/requirements.txt
RUN rm -f /tmp/requirements.txt

# This is for prod, it's overwritten for development
ADD manage.py $APPDIR
ADD vuedj $APPDIR/vuedj
ADD app $APPDIR/app
# Static needs to be there for prod
RUN mkdir $APPDIR/static
ADD build-api/run-django.sh $APPDIR/run-django.sh

CMD $APPDIR/run-django.sh
