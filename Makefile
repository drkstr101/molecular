.PHONY: ci clean setup lint test build start

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make
NX_BRANCH := dev

ci:
	$(MAKE) setup
	$(MAKE) lint
	$(MAKE) build
	$(MAKE) test

clean:
	rm -rf yarn.lock coverage/ tmp/ dist/ node_modules/ **/__snapshots__/
	yarn cache clean
	rm .sourcebit-nextjs-cache.json

setup:
	yarn install

lint:
	nx format
	NX_BRANCH=$(NX_BRANCH) nx workspace-lint
	NX_BRANCH=$(NX_BRANCH) nx run-many --all --target lint --verbose
	stackbit validate

test:
	NX_BRANCH=$(NX_BRANCH) nx run-many --all --target test -u --coverage --verbose

build:
	NX_BRANCH=$(NX_BRANCH) nx run-many --all --target build --verbose

start:
	NX_BRANCH=$(NX_BRANCH) nx run-many --all --target serve --parallel

# Application targets
####

home:
	NX_BRANCH=$(NX_BRANCH) nx run home:build:production --verbose

blog:
	@echo 'TODO Not implemented.'
	exit 1

docs:
	@echo 'TODO Not implemented.'
	exit 1

expo:
	@echo 'TODO Not implemented.'
	exit 1


# Dev targets
####

depgraph:
	depcruise . \
		--config .dependency-cruiser.js  \
		--output-type dot \
		--output-to docs/depgraph.dot --prefix "https://github.com/drkstr101/molecular/blob/main/"
	cat docs/depgraph.dot | dot -T svg > docs/depgraph.svg.tmp
	mv docs/depgraph.svg.tmp docs/depgraph.svg

