#!/bin/bash
docker build -t testherokuimg . 
docker tag testherokuimg:latest registry.heroku.com/$HEROKU_APP_NAME/web
docker push registry.heroku.com/$HEROKU_APP_NAME/web
