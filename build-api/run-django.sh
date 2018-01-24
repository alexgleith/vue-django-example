#!/bin/bash

# Collect static files ready to be served by Nginx
echo "Running collect static"
python3 manage.py collectstatic --clear --noinput

# We probably should refactor this...
export PGPASSWORD=${POSTGRES_PASSWORD}
# Wait for Postgres to set up the PostGIS tables and accept connections.
CHECK_CMD="psql -h ${POSTGRES_HOSTNAME} -d ${POSTGRES_USER} -U ${POSTGRES_USER} -c \dt"

echo "Starting PostGIS to import data..."
n=0
nchecks=10
until [ $n -ge $nchecks ]
do
    let n+=1
    echo "Checking ${n} of ${nchecks} if PostGIS is up..."
    $CHECK_CMD > /dev/null && break
    sleep 5
done
$CHECK_CMD > /dev/null
if [ $? == 0 ]; then
    echo "PostGIS is up and running"
else
    echo "PostGIS failed to start"
    exit 1
fi

echo "Running migrate"
python3 manage.py migrate

echo "Running gunicorn"
gunicorn --workers 2 --bind=0.0.0.0:8000 vuedj.wsgi
