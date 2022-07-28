.PHONY: test coverage

deps: .deps-api .deps-webapp

down:
	docker-compose down

up: .rm_network .network .up-db .up-webapp .up-api .connect-api .connect-webapp

test: .test-api .test-webapp

coverage: .coverage-api .coverage-webapp

.rm_network:
	docker network rm spotlist_net

.network:
	docker network create --attachable spotlist_net

.connect-api:
	docker network connect spotlist_net rv-deliver-app-fullstack-api

.connect-webapp:
	docker network connect spotlist_net rv-deliver-app-fullstack-webapp

.deps-api:
	docker-compose run -v "${PWD}/api:/opt/app" node yarn install

.deps-webapp:
	docker-compose run -v "${PWD}/webapp:/opt/app" node yarn install

.up-api: .deps-api
	docker-compose up -d api

.up-db: .deps-api
	docker-compose up db-spotlist

.up-webapp: .deps-webapp
	docker-compose up -d app

.test-api: .deps-api
	docker-compose run -v "${PWD}/api:/opt/app" -e CI=true node yarn test

.test-webapp: .deps-webapp
	docker-compose run -v "${PWD}/webapp:/opt/app" -e CI=true node yarn test

.coverage-api: .deps-api
	docker-compose run -v "${PWD}/api:/opt/app" -e CI=true node yarn test --coverage

.coverage-webapp: .deps-webapp
	docker-compose run -v "${PWD}/webapp:/opt/app" -e CI=true node yarn coverage
