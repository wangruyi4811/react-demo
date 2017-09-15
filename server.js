const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const Static = require('koa-static')
const PORT = 8008
const ROOT = __dirname
/*webpack-dev*/
const webpack = require('webpack')
const koaWebpackMiddleware = require('koa-webpack-middleware')
const devMiddleware = koaWebpackMiddleware.devMiddleware
const hotMiddleware = koaWebpackMiddleware.hotMiddleware
const devConfig = require('./config/webpack.config')
const compile = webpack(devConfig)

app.use(devMiddleware(compile, {
	 // display no info to console (only warnings and errors) 
    noInfo: false,
 
    // display nothing to the console 
    quiet: false,
 
    // switch into lazy mode 
    // that means no watching, but recompilation on every request 
    lazy: true,
 
    // watch options (only lazy: false) 
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
 
    // public path to bind the middleware to 
    // use the same as in webpack 
    //publicPath: '',
 
    // custom headers 
    headers: { "X-Custom-Header": "yes" },
 
    // options for formating the statistics 
    stats: {
        colors: true
    }
}))
app.use(hotMiddleware(compile, {
	// log: console.log,
  	path: devConfig.output.path,
  	// heartbeat: 10 * 1000
}))
//静态资源请求
app.use(Static(ROOT))
//日志
app.use(logger())
//启动端口
app.listen(PORT)


console.log(`koaApp started at port ${PORT}`)