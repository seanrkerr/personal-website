
build: clean ## Compile and package the code
	yarn run next build

dev: ## start next in dev mode
	yarn run next dev

start: ## start next
	yarn run next start

clean: ## Clean up the project artefacts
	rm -rf .next

lint: ## Lint the code
	yarn run next lint

test: ## Run unit tests
	npx jest

test-ui-open: ## open cypress
	yarn run cypress open

test-ui-run: ## run cypress under electron
	ELECTRON_ENABLE_LOGGING=true \
	DEBUG=cypress:electron \
		npx cypress run

install: ## install packages
	yarn install


