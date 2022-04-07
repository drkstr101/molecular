.PHONY: setup clean format lint test build start ci dato-export docs

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make

ci:
	$(MAKE) setup
	$(MAKE) format
	$(MAKE) lint
	$(MAKE) test
	$(MAKE) build

clean:
	rm -rf yarn.lock coverage/ dist/ public/ node_modules/ **/__snapshots__/ apps/**/.cache/
	yarn cache clean

analyze:
	ANALYZE=true nx build home --verbose

setup:
	yarn install

format:
	nx format

lint:
	nx run-many --all --target lint

test:
	nx run-many --all --target test

build:
	nx run-many --all --target test

home:
	nx build home --prod --verbose


# Run all in parallel
start:
	nx run-many --all --target serve --parallel



