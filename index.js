const express=require('express');
const app=express();

app.get("/", (req,res)=>{
    return res.status(200).json({
        success:true,
        message: "App is running"
    })
});


app.listen(8000, ()=>{
    console.log(`App is listening at port: 5000`)
});