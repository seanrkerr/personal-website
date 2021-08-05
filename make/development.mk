
build: clean ## Compile and package the code
	npx next build

dev:
	npx next dev

clean: ## Clean up the project artefacts
	rm -rf .next

lint: ## Lint the code
	npx next lint

test: ## Run unit tests
	$(eval TABLE_NAME := $(LOCAL_TABLE_NAME))
	npx jest

