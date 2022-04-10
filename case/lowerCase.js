import fs from 'fs'
import _ from 'lodash'

export async function lower(files, directory) {
    for(let file of files) {
        fs.rename(directory + file, directory + _.lowerCase(file).replace(/ /g, ''), (err) => {
            if(err) return err
        })
    }
}