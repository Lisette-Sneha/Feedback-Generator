REPOSITORY = 722666617693.dkr.ecr.eu-west-1.amazonaws.com/impraise/coin
VERSION := $(shell git rev-parse HEAD)

all: build

build:
	docker build -t impraise/coin .

push: build
	docker tag impraise/coin $(REPOSITORY):$(VERSION)
	docker push $(REPOSITORY):$(VERSION)

