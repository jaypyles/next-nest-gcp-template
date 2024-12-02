build:
	docker-compose -f docker-compose.yml build

up:
	docker-compose -f docker-compose.yml up -d

up-dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d