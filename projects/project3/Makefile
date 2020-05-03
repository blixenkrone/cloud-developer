.PHONY: docker build clean feed-api users-api frontend fix_audit

docker:
	docker-compose up

api=feed
build:
	cd ./api/${api}-service/ && npm run build

clean:
	rm -rf ./api/users-service/node_modules \
	&& cd ./api/${api}-service/ && npm run clean

feed-api:
	cd ./api/feed-service/ && npm run dev

users-api:
	cd ./api/users-service/ && npm run dev

frontend:
	cd ./udagram-frontend && ionic serve

fix_audit:
	cd ./udagram-api/ \
	&& npm audit fix \
	&& cd ../udagram-frontend \
	&& npm audit fix
