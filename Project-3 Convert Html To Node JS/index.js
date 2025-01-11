const express = require('express');
const port = 9090;
const app = express();
app.set('view engine', 'ejs');

const path = require('path');
app.use('/',express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    return res.render('Dashboard');
})

app.get('/Charts',(req,res)=>{
    return res.render('Charts');
})

app.get('/Widgets' ,(req,res)=>{
    return res.render('Widgets');
})

app.get('/Table',(req,res)=>{
    return res.render('Table');
})

app.get('/Grid',(req,res)=>{
    return res.render('Grid');
})

app.get('/Form-basic',(req,res)=>{
    return res.render('Form-basic');
})

app.get('/Form-wizard',(req,res)=>{
    return res.render('Form-wizard');
})

app.get('/Pages-buttons',(req,res)=>{
    return res.render('Pages-buttons');
})

app.get('/Icon-material',(req,res)=>{
    return res.render('Icon-material');
})

app.get('/Icon-fontawesome',(req,res)=>{
    return res.render('Icon-fontawesome');
})

app.get('/Pages-elements',(req,res)=>{
    return res.render('Pages-elements');
})
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;    
    }
    console.log(`Server is running on port :- ${port}`);
})