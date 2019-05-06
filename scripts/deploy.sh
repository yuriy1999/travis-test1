wget -qO- https://toolbelt.heroku.com/install.sh | sh 
heroku container:release web --app $HEROKU_APP_NAME