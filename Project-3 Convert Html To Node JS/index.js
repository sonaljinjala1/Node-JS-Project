const express = require('express');
const port = 9090;
const app = express();//destructuring
app.set('view engine', 'ejs');

const path = require('path');//bathi css ni file atteched karva mate use thay che
app.use('/', express.static(path.join(__dirname, 'public')))//bathi css ni file atteched karva mate use thay che

//Pages Add karne ke liye use hota he
app.get('/', (req, res) => {
    return res.render('Dashboard');
})

app.get('/Charts', (req, res) => {
    return res.render('Charts');
})

app.get('/Widgets', (req, res) => {
    return res.render('Widgets');
})

app.get('/Table', (req, res) => {
    return res.render('Table');
})

app.get('/Grid', (req, res) => {
    return res.render('Grid');
})

app.get('/Form-basic', (req, res) => {
    return res.render('Form-basic');
})

app.get('/Form-wizard', (req, res) => {
    return res.render('Form-wizard');
})

app.get('/Pages-buttons', (req, res) => {
    return res.render('Pages-buttons');
})

app.get('/Icon-material', (req, res) => {
    return res.render('Icon-material');
})

app.get('/Icon-fontawesome', (req, res) => {
    return res.render('Icon-fontawesome');
})

app.get('/Pages-elements', (req, res) => {
    return res.render('Pages-elements');
})

app.get('/Dashboard2', (req, res) => {
    return res.render('Dashboard2');
})

app.get('/Pages-gallery', (req, res) => {
    return res.render('Pages-gallery');
})

app.get('/Pages-calendar', (req, res) => {
    return res.render('Pages-calendar');
})

app.get('/Pages-invoice', (req, res) => {
    return res.render('Pages-invoice');
})

app.get('/Pages-chat', (req, res) => {
    return res.render('Pages-chat');
})

app.get('/Authentication-login', (req, res) => {
    return res.render('Authentication-login');
})

app.get('/Authentication-register', (req, res) => {
    return res.render('Authentication-register');
})

app.get('/Error-403', (req, res) => {
    return res.render('Error-403');
})

app.get('/Error-404', (req, res) => {
    return res.render('Error-404');
})

app.get('/Error-405', (req, res) => {
    return res.render('Error-405');
})

app.get('/Error-500', (req, res) => {
    return res.render('Error-500');
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})