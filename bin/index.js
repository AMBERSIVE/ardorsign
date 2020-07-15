#!/usr/bin/env node

const sign   = require("../lib/sign");
const ardor  = require('ardorjs');
const colors = require('colors');

const cliHelper = require('cli-helper').instance;

const unsignedTransaction = cliHelper.getOpt('transaction');
const secret = cliHelper.getOpt('secret');

if (unsignedTransaction === undefined || secret === undefined) {
    console.log(colors.red('ERROR: Missing transaction or secret!'));
    process.exit(1);
}

const signedTransaction = ardor.signTransactionBytes(unsignedTransaction, secret);

console.log("Signed Transaction is:");
console.log(signedTransaction);