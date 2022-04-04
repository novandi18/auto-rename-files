import fs from 'fs'
import _ from 'lodash'
import path from 'path'

export async function dot(files, directory) {
    for(let file of files) {
        let ext = path.extname(file)
        let filename = file.replace(ext, '')
        fs.rename(directory + file, directory + _.lowerCase(filename).replace(/ /g, '.') + ext, (err) => {
            if(err) return err
        })
    }
}