run:
	docker-compose up

cmd:
	docker-compose exec node bash

build:
	docker-compose build

clean:
	-rm -rf node_modules
	-rm -rf .venv

make-migrations:
	docker-compose exec django python manage.py makemigrations

migrate:
	docker-compose exec django python manage.py migrate

get-db:
	docker-compose exec django python manage.py dbshell

setup-django:
	docker-compose exec django \
	bash -c "echo \"from django.contrib.auth.models import User; \
		User.objects.create_superuser('admin', 'admin@example.com', 'password')\" \
		| python manage.py shell" 