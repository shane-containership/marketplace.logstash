var fs = require("fs");
var _ = require("lodash");
var child_process = require("child_process");

var logstash = process.env;

_.defaults(logstash, {
    REDIS_KEY: "logs",
    REDIS_HOST: "localhost",
    REDIS_PORT: 6379,
    ELASTICSEARCH_HOST: "localhost",
    ELASTICSEARCH_PORT: 9200
});

fs.readFile([__dirname, "logstash.template"].join("/"), function(err, config){
    config = config.toString();
    config = config.replace(/REDIS_HOST/g, logstash.REDIS_HOST);
    config = config.replace(/REDIS_PORT/g, logstash.REDIS_PORT);
    config = config.replace(/REDIS_KEY/g, logstash.REDIS_KEY);
    config = config.replace(/ELASTICSEARCH_HOST/g, logstash.ELASTICSEARCH_HOST);
    config = config.replace(/ELASTICSEARCH_PORT/g, logstash.ELASTICSEARCH_PORT);

    fs.writeFile([__dirname, "logstash.conf"].join("/"), config, function(err){
        if(err){
            process.stderr.write(err.message);
            process.exit(1);
        }

        var proc = child_process.spawn("logstash", ["-f", [__dirname, "logstash.conf"].join("/")]);

        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);

        proc.on("error", function(err){
            process.stderr.write(err.message);
            process.exit(1);
        });
    });
});
