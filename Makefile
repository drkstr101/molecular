.PHONY: ci clean setup lint test build start

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make

ci:
	$(MAKE) setup
	$(MAKE) lint
	$(MAKE) test
	$(MAKE) build

clean:
	rm -rf yarn.lock coverage/ tmp/ dist/ node_modules/ **/__snapshots__/
	yarn cache clean
	rm .sourcebit-nextjs-cache.json

setup:
	yarn install
	@echo '{ "objects": [], "props": {}, "pages": [] }' > .sourcebit-nextjs-cache.json

lint:
	nx format
	nx run-many --all --target lint --verbose

test:
	nx run-many --all --target test -u --coverage --verbose

build:
	nx run-many --all --target build --verbose

start:
	nx run-many --all --target serve --parallel

# Application targets
####

home:
	nx run home:build:production --verbose

blog:
	@echo 'TODO Not implemented.'
	exit 1

docs:
	@echo 'TODO Not implemented.'
	exit 1

expo:
	@echo 'TODO Not implemented.'
	exit 1




