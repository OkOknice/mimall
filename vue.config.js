const express = require('express')
const app  = express()
const data = require('./src/mock/data.json')
const user = require('./src/mock/login.json')
var apiRoutes = express.Router()
app.use('/api',apiRoutes)
module.exports = {
    devServer: {
        open:true,
        proxy: {
            '/api': {
                target: "http://mall-pre.springboot.cn",
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        },
        before(app){
            app.get('/api/data',(req,res) =>{
                res.json({
                    errno:0,
                    data
                })
            }),
            app.get('/api/user',(req,res) =>{
                res.json({
                    errno:0,
                    data:user.data
                })
            })
        }
    }
}