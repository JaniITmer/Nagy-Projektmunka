const express =require('express');
const app= express();
const mysql=require('mysql')



const db=mysql.createPool({

    host:'localhost',
    user:'root',
    password:'password',
    database:'questionnaire',
});


app.get("/",(req,res)=>{

    const sqlInsert=
    "INSERT INTO users (username,password,email) VALUES('Probafelhasznlo','jelszo','asd@gmail.com');"
    db.query(sqlInsert,(err,result)=>{
        res.end("A szerver itt fut ");
    })

   
});

app.listen(3001, ()=> {

    console.log("A szerver a 3001-es porton fut");
});

