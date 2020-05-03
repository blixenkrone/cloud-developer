.PHONY: api frontend fix_audit

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
