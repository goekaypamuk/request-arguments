var f = require('./dist/index');
f.requestArguments([,
    {
        name: 'port',
        description: 'Port for connection',
        short: 'p',
        mandatory: true
    },
    {
        name: 'controllerPort',
        description: 'Port of Controller',
        short: 'c',
        mandatory: true
    },
    {
        name: 'controllerLink',
        description: 'Ip of Controller',
        short: 'i',
        mandatory: true
    }
]).then(
    function(b) {
        console.log(b)
    }
)