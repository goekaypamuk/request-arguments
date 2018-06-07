"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argv = require('minimist')(process.argv.slice(2));
const typed_prompts_1 = require("typed-prompts");
function requestArguments(params) {
    console.log(argv);
    if (argv['h']) {
        console.log('Startup Params v.1.0.0');
        params.forEach((element) => {
            console.log('-' + element.short + ' :' + element.name + ''.padEnd(40 - (element.short.length + element.name.length)) + element.description);
        });
        process.exit(0);
    }
    return new Promise((resolve, reject) => {
        let newParams = {};
        let missing = [];
        params.forEach((element) => {
            if (argv[element.short]) {
                newParams[element.short] = argv[element.short];
            }
            else {
                if (element.mandatory != false) {
                    missing.push(typed_prompts_1.input(element.short, element.description));
                }
            }
        });
        if (missing.length === 0) {
            resolve(newParams);
        }
        else {
            console.log('Missing manadtory arguments!');
        }
        typed_prompts_1.prompt(missing).then((answer) => {
            for (let key in answer) {
                newParams[key] = answer[key];
            }
            resolve(newParams);
        });
    });
}
exports.requestArguments = requestArguments;
