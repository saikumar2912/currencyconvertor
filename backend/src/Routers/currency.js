const express = require('express');
const router = express.Router();
const axios=require('axios');


router.get('/c/:from/:to/:value',async(req,res)=>{
    const from=req.params.from
    const to=req.params.to
    const value=req.params.value
    let response=await axios.get('http://data.fixer.io/api/latest?access_key=147af11bb3bba437fc11563eb065b0aa&format=1')
    let base=value/response.data.rates[from];
let rate =base*response.data.rates[to]
res.send((rate).toString());
})

module.exports = router;
