#!/bin/bash
# docker build -t testherokuimg . 
# docker tag testherokuimg:latest registry.heroku.com/limitless-forest-11326/web
# docker push registry.heroku.com/limitless-forest-11326/web

echo "docker username $DOCKER_USERNAME"
echo "docer pass $DOCKER_PASSWORD"
echo "heroku app name $HEROKU_APP_NAME"
