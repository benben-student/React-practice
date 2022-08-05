const express = require("express")
const router = express.Router()

router.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if (username === "iwen" && password === "123") {
        res.send({
            msg: "登陆成功",
            status: 200
        })
    } else {
        res.send({
            msg: "登陆失败",
            status: 500
        })
    }
})

module.exports = router