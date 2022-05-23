const express = require('express')
const path= require("path")
const app = express()
const axios = require('axios')
const port=3005

app.set('views',path.join(__dirname,"views"));
app.set('view engine', 'ejs');

app.use(express.json())


app.get('/',async (req,res)=>{
    const response = await axios.post('http://localhost:3000/',{data:"O Hi this a test Car River Deer Car Bear and"});
    const wf = response.data;
    //console.log(wf)
    res.render("index",{
        l1:1,n1:wf[1],
        l2:2,n2:wf[2],
        l3:3,n3:wf[3],
        l4:4,n4:wf[4],
        l5:5,n5:wf[5],
        l6:6,n6:wf[6],
        l7:7,n7:wf[7],
        l8:8,n8:wf[8],
        l9:9,n9:wf[9],
        l10:10,n10:wf[10],
    
    });
})

app.listen(port,()=>{
    console.log(`api is running on ${port}`);
    })