const argv = require('minimist')(process.argv.slice(2));
import {prompt, list, editor, input} from 'typed-prompts';

export function requestArguments(params: Array<Param>): Promise<any> {
    if (argv['h']) {
        console.log('***********************************************************');
        console.log('***** Request Arguments HELP ******************************');
        console.log('***********************************************************');
        console.log();
        params.forEach((element: any) => {
            console.log('-' + element.short + ' :' + element.name + ''.padEnd(40 - (element.short.length + element.name.length)) + element.description);
        })
        console.log();
        console.log('***********************************************************');
        process.exit(0);
    }

    return new Promise((resolve, reject) => {
        let newParams: any = {};
        let missing: any = [];
        params.forEach((element: any) => {
            if(argv[element.short]) {
                newParams[element.short] = argv[element.short]
            } else {
                if (element.mandatory != false) {
                    missing.push(input(element.short, element.description))
                }
            }
        })
        if (missing.length === 0) {
            resolve(newParams);
        } else {
            console.log('Missing manadtory arguments!')
        }
        prompt<any>(missing).then((answer: any) => {
            for(let key in answer) {
                newParams[key] = answer[key];
            }
            resolve(newParams);
        })
    })
}

export interface Param {
    name: string,
    description: string,
    short: string,
    mandatory: boolean
}