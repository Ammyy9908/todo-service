const express = require('express')


const app  = express()


app.get("/health",(req,res)=>{
    const env = process.env.BOOT_CUR_ENV
    const version = process.env.VERSION
    res.status(200).send({"message":"Ok","version":version,"env":env})
})



const PORT = 8080



app.listen(PORT,()=>{

    console.log(`Server is Listening on ${PORT}`)
})