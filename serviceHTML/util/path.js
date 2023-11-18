// const path=require('path');

// module.exports=path.dirname(process.mainModule.filename);

// paths.js

const path = require('path');

const rootDir = path.resolve(__dirname, '..');

module.exports = { rootDir };
