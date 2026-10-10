.PHONY: help install dev build preview lint clean

help: ## Show available commands
	@grep -E '^[a-z]+:.*## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*## "}; {printf "  %-10s %s\n", $$1, $$2}'

node_modules: package.json package-lock.json
	npm ci
	@touch node_modules

install: node_modules ## Install dependencies

dev: node_modules ## Start the dev server with hot reload
	npm run dev -- --open

build: node_modules ## Type-check and build to dist/
	npm run build

preview: build ## Build, then serve dist/ like GitHub Pages would
	npm run preview -- --open

lint: node_modules ## Run ESLint
	npm run lint

clean: ## Remove build output and dependencies
	rm -rf dist node_modules
