const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    return res.send({
        success : true,
        message : "Welcome to nexa sound"
    })
})

module.exports = router