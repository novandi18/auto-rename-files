import fs from 'fs'
import _ from 'lodash'

export async function upper(files, directory) {
    for(let file of files) {
        fs.rename(directory + file, directory + _.upperCase(file).replace(/ /g, '_'), (err) => {
            if(err) return err
        })
    }
}