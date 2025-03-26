import fs from 'fs';

const loadJson = (path) => {
    return JSON.parse(fs.readFileSync(path, {encoding: 'utf-8'}));
    
}

export default loadJson;