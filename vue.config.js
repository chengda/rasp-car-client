/*
 * Copyright (c) 2019.
 * 北京九思金信科技有限公司对该文件内容保留所有权利。
 * 未经许可，不得私自拷贝、传播、发布、引用该文件内容，违者将被追究法律责任。
 */

module.exports = {
    publicPath: './',
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api/': {
                target: 'http://localhost:8080/api/',
                changeOrigin: true,
                pathRewrite: {'^/api/': ''}
            }
        }
    },
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'src/index/index.html',
            filename: 'index.html'
        },
        pc: {
            entry: 'src/pc/main.js',
            template: 'src/pc/index.html',
            filename: 'pc_index.html'
        },
        mobile: {
            entry: 'src/mobile/main.js',
            template: 'src/mobile/index.html',
            filename: 'mobile_index.html'
        }
    }
}
