#!/bin/bash
docker login --username=_ --password=$HEROKU_API_KEY registry.heroku.com
docker build -t testherokuimg . 
docker tag testherokuimg:latest registry.heroku.com/$HEROKU_APP_NAME/web
docker push registry.heroku.com/$HEROKU_APP_NAME/web
