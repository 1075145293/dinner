module.exports = {
    devServer: {
        open: true,
        port:8080,
        proxy: {
            "/api":{
                target: "http://192.168.31.220:8081",
                changeOrigin:true
            }
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@a': '@/assets',
                '@c': '@/components',
                '@v': '@/views',
            }
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title= '今天晚上吃什么呀'
                return args
            })
    }
}
