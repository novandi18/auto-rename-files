#!/usr/bin/env node

import fs from 'fs'
import ora from 'ora'
import inquirer from 'inquirer'
import { snake } from './case/snakeCase.js'
import { camel } from './case/camelCase.js'
import { kebab } from './case/kebabCase.js'
import { pascal } from './case/pascalCase.js'
import { upper } from './case/upperCase.js'
import { dot } from './case/dotCase.js'
import { lower } from './case/lowerCase.js'

let path = process.argv.slice(2)[0] === undefined ? "./" : process.argv.slice(2)[0]

let sc_name = process.argv.slice(2)[1]
let shortcut = sc_name === "-sc" ? "Snake Case" :
    sc_name === "-cc" ? "Camel Case" :
    sc_name === "-kc" ? "Kebab Case" :
    sc_name === "-pc" ? "Pascal Case" :
    sc_name === "-uc" ? "Upper Case" :
    sc_name === "-dc" ? "Dot Case" :
    sc_name === "-lc" ? "Lower Case" :
    null

let absolute_path = !path.endsWith('/') ? path + '/' : path
const list = ['Snake Case', 'Camel Case', 'Kebab Case', 'Pascal Case', 'Upper Case', 'Dot Case', 'Lower Case']

async function run(directory, case_name) {
    const list_files = await read(directory)
    const { openQuestion } = case_name !== null ? { openQuestion : case_name } : await inquirer.prompt({
        name: 'openQuestion',
        choices: list,
        message: 'What style case do you want to rename files?',
        type: 'list'
    })

    console.log(list_files)
    
    const spinner = ora("Renaming all files...\n").start()
    await simulateSlowAsyncTask(2000)
    
    if(openQuestion === list[0]) {
        await snake(list_files, directory)
    } else if(openQuestion === list[1]) {
        await camel(list_files, directory)
    } else if(openQuestion === list[2]) {
        await kebab(list_files, directory)
    } else if(openQuestion === list[3]) {
        await pascal(list_files, directory)
    } else if(openQuestion === list[4]) {
        await upper(list_files, directory)
    } else if(openQuestion === list[5]) {
        await dot(list_files, directory)
    } else if(openQuestion === list[6]) {
        await lower(list_files, directory)
    }

    spinner.succeed("Success renamed all files.\n")
}

async function read(directory) {
    try {
        const dirents = await fs.promises.readdir(directory, { withFileTypes: true })
        return dirents.filter(dirent => dirent.isFile()).map(dirent => dirent.name)
    } catch (error) {
        return error
    }
}

async function simulateSlowAsyncTask(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

run(absolute_path, shortcut)