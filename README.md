docker-logstash
==============

##About

###Description
Docker image designed to run logstash on ContainerShip

###Author
ContainerShip Developers - developers@containership.io

##Usage
This image is designed to run logstash on a ContainerShip cluster.

###Configuration
This image will run as-is, with no additional environment variables set. There are various optionally configurable environment variables:

* `REDIS_HOST` - redis host address
* `REDIS_PORT` - redis port
* `REDIS_KEY` - redis key where logs will be stored
* `ELASTICSEARCH_HOST` - elasticsearch host address
* `ELASTICSEARCH_PORT` - elasticsearch port

##Contributing
Pull requests and issues are encouraged!
