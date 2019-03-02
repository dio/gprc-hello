up:
	npm run webpack
	docker-compose up --build & npm run start

down:
	docker-compose down

clean:
	rm -fr dist

.PHONY: up down clean
