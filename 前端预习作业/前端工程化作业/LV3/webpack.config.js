const path = require('path');
const GitChangelogPlugin = require('./GitChangelogPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new GitChangelogPlugin()
    ]
};