const path = require('path');

module.exports = {
    //入口entry（相对路径）
    entry: './src/index.js',
    //输出
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),//绝对路径，__dirname代表当前文件夹目录
        clean:true,
    },
};