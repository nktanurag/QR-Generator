const express=require('express')
// const mongoose=require('mongoose')
const app=express()
const qr=require('qrcode')
// const bp=require('body-parser')


// mongoose.connect('mongodb://localhost/urlShortener',{
//     useNewUrlParser:true,useUnifiedTopology:true
// });

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
// app.use(bp.json())

app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/scan',(req,res)=>{
  const url=req.body.url
  if(url.length==0)res.send("No data")

  qr.toDataURL(url,(err,src)=>{
    if (err) res.send("Error occured");
    res.render("scan", { src });
  });
})
app.listen(process.env.PORT || 3000);
