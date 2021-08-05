
SHELL := /usr/bin/env bash -o errexit -o nounset -o pipefail
.DEFAULT_GOAL := default
PROJECT_ROOT := $(shell git rev-parse --show-toplevel)
MAKE_TARGET_REGEX := ^[a-zA-Z%_-]+:

ENV ?= dev
include .env .env.$(ENV)

include $(PROJECT_ROOT)/make/*.mk

.PHONY: $(shell grep -E -h "$(MAKE_TARGET_REGEX)" $(MAKEFILE_LIST) | sed s/:.*// | tr '\n' ' ')

dump: ## dump all make vars
	@$(foreach V, $(sort $(.VARIABLES)), \
		$(if $(filter-out environment% default automatic, $(origin $V)), \
			$(info $V=$($V) ($(value $V))) \
		) \
	)
	@echo > /dev/null