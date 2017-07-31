# my-project

> A Django - Vue.js project

## Build Setup

``` bash
# Build the Docker images
make build

# Run local dev
make run

# Get node command line
make cmd

# Migrate the DB
make makemigrations
make migrate

# Get an interactive DB shell
make get-db

# Set up a super-user on Django
make setup-django
```


### TODO

 * Set up PostGIS
 * Put together a production deployment process
 * Set up a [second docker-compose](https://docs.docker.com/compose/extends/) and Dockerfiles to run a production build locally


## Previous notes

For detailed explanation on how things work, checkout the [guide](https://github.com/vuejs-templates/webpack#vue-webpack-boilerplate) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
