const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/', (req, res, next) => {
  axios.get('https://randomuser.me/api/').then(item => {  
    console.log(item.data.users)
  })
  res.send('hello')
})




module.exports = router