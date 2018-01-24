PROD=-f docker-compose-base.yml -f docker-compose-prod.yml
DEV=-f docker-compose-base.yml -f docker-compose-dev.yml

# Running things
run:
	docker-compose $(DEV) up

run-prod:
	docker-compose $(PROD) up

# Building things
build-dev:
	docker-compose $(DEV) build

build-prod:
	docker-compose $(PROD) build

# Get rid of local folders that are built
clean:
	-rm -rf node_modules

# Get rid of docker-compose containers
docker-clean:
	docker-compose $(DEV) rm --force


# Get a command line for the node dev system
# This is used to add packages, using `yarn add` and using `-D` for development only
node-cmd:
	docker-compose $(DEV) exec www bash

django-cmd:
	docker-compose $(DEV) exec api bash

# Manage the Django database
make-migrations:
	docker-compose $(DEV) exec api python3 manage.py makemigrations

migrate:
	docker-compose $(DEV) exec api python3 manage.py migrate

get-db:
	docker-compose $(DEV) exec api python3 manage.py dbshell

initialise-db: migrate load-test
	docker-compose $(DEV) restart api

reset-db:
	-docker-compose $(DEV) stop db
	docker-compose $(DEV) rm --force db
	docker-compose $(DEV) up -d db && sleep 10
	make initialise-db

