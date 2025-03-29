const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/, // 假设我们要处理 .txt 文件
                use: [
                    {
                        loader: path.resolve(__dirname, './Redrock.js'),
                        options: {
                            field: 'Redrock', // 需要替换的字段
                            replacement: 'redrock' // 替换后的值
                        }
                    }
                ]
            }
        ]
    }
};