const express = require("express")
const app = express()
const router = require("./router")
const bodyParser = require("body-parser")
const cors=require("cors")

app.use("/api",cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use("/api", router)

app.listen(3001, () => {
    console.log("服务器运行在3000端口上。。。");
})