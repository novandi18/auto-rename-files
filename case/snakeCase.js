import fs from 'fs'
import _ from 'lodash'
import path from 'path'

export async function snake(files, directory) {
    for(let file of files) {
        let ext = path.extname(file)
        let filename = file.replace(ext, '')
        fs.rename(directory + file, directory + _.snakeCase(filename) + ext, (err) => {
            if(err) return err
        })
    }
}