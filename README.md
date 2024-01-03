# 🚀 Getting started with Docker-Strapi

This is a docker containerised strapi that work seemlessly. 
STRAPI VERSION
v4.15.4

This repo consist of strapi code, Dockerfile and docker-compose.yml file. Code has not been entirely containerised so i can avoid maintaining the docker image - you would need to copy entire repo to run Dockerfile. Docker compose currently builds a local docker image and run this image rather than on remote.

The docker-compose utilizes postgres db container would recommend using remote database to prevent loss of data.

To configure database connection please check docker-compose file environemnt variables from line 10:

```
 environment:
      DATABASE_CLIENT: postgres
      DATABASE_HOST: strapi_database  # Updated with the name of the database service
      DATABASE_PORT: 5432
      DATABASE_NAME: strapidb
      DATABASE_USERNAME: strapi_user  # Updated username
      DATABASE_PASSWORD: strapi_password  # Updated password
      DATABASE_SSL: 'false'
      NODE_ENV: development
```

### `develop`

Start your Strapi application with following command

```
docker-compose up
```

Enjoy :)

### `Strapi Github`
https://github.com/strapi/strapi
