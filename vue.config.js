const express = require('express')
const app  = express()
const data = require('./src/mock/data.json')
var apiRoutes = express.Router()
app.use('/api',apiRoutes)
module.exports = {
    devServer: {
        open:true,
        proxy: {
            '/api': {
                target: "http://localhost:8080",
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
            })
        }
    }
}