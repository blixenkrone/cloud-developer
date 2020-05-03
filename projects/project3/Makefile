.PHONY: api frontend fix_audit

api:
	cd ./udagram-api/ && npm run dev

frontend:
	cd ./udagram-frontend && ionic serve

fix_audit:
	cd ./udagram-api/ \
	&& npm audit fix \
	&& cd ../udagram-frontend \
	&& npm audit fix
