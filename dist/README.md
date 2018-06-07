# request-arguments
Request params by arguments or prompt

## Installation
To install this library, run:
```SHELL
$ npm i -s request-arguments
```

Clone this repository locally :
```
$ git clone https://github.com/goekaypamuk/request-arguments
```

### Example of use

Import and use __(index.js)__: 
```Typescript
import { requestArguments } from 'request-arguments';

requestArguments([
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
```

You can now use __-h__ flag to print out params:
```SHELL
$ node index -h
```
output:
```out
***********************************************************
***** Request Arguments HELP ******************************
***********************************************************

-p :port                                   Port for connection
-c :controllerPort                         Port of Controller
-i :controllerLink                         Ip of Controller

***********************************************************

```

```
$ node index -p 5555
Missing manadtory arguments!
? Port of Controller 444
? Ip of Controller localhost
{ p: 5555, c: '444', i: 'localhost' }
```


## License

MIT © Gökay Pamuk