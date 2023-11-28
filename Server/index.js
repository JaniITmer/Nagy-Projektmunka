const express =require('express');
const app= express();

app.get("/",(req,res)=>{

    res.end("A szerver itt fut ");
});

app.listen(3001, ()=> {

    console.log("A szerver a 3001-es porton fut");
});

