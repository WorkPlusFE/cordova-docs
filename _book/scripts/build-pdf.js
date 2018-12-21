require('shelljs/global');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const chalk = require('chalk');
const log = console.log;

const date = moment().format('YYYYMMDD');
const exportPath = path.resolve(__dirname, '../pdf');
let fileName = `WorkPlus_Cordova_API-${date}`;
const files = fs.readdirSync(exportPath);
if (files) {
    const count = files.filter((file) => {
        return file.indexOf(fileName) > -1;
    }).length + 1;
    if (count) {
        fileName += (count < 10 ? `0${count}` : count);
    }
}

const outputDir = path.resolve(__dirname, `../pdf/${fileName}.pdf`); 
const _bash = `gitbook pdf ${path.resolve(__dirname, '../')} ${outputDir}`;

log(chalk.green(`\n* 开始导出PDF文件 >> ${exportPath}/ *`));
log(chalk.green(`\n* 文件名为: ${fileName}.pdf *`));
log('\n');
exec(_bash);

