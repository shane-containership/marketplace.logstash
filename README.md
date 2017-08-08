Logstash

See https://www.elastic.co/products/logstash for more information about Logstash.

## What is the Containership Marketplace?

The Containership marketplace is a series of containerized applications configured to easily run and scale on a [containership.io](https://containership.io) cluster! Many conveniences such as High-Availability, automatic clustering among others are able to be configured out of the box allowing you to scale seamlessly as your infrastructure is required to grow.

> **Note:** If you attempt to run this image outside of a containership cluster, we cannot guarantee that it will run properly.

### Author
ContainerShip Developers - developers@containership.io

### Configuration
This image will run as-is, with no additional environment variables set. There are various optionally configurable environment variables:

* `REDIS_HOST` - redis host address
* `REDIS_PORT` - redis port
* `REDIS_KEY` - redis key where logs will be stored
* `ELASTICSEARCH_HOST` - elasticsearch host address
* `ELASTICSEARCH_PORT` - elasticsearch port

## Contributing
Pull requests and issues are encouraged!
