const express = require('express');
const port = 8080;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded());

let record = [];

app.get('/', (req, res) => {
    return res.render('table', {
        record
    });
});

app.get('/add', (req, res) => {
    return res.render('form');
});

app.post('/addrecord', (req, res) => {
    let obj = {
        id: Math.floor(Math.random() * 10000),
        task: req.body.task,
        status: req.body.status,
        deadline: req.body.deadline // Adding deadline
    };
    record.push(obj);
    return res.redirect('/');
});

app.get('/deleterecord', (req, res) => {
    let deleteid = req.query.id;
    let deleteData = record.filter(val => val.id != deleteid);
    record = deleteData;
    console.log("Record deleted");
    return res.redirect('/');
});

app.get('/editrecord', (req, res) => {
    let editid = req.query.id;
    let single = record.find(val => val.id == editid);
    return res.render('edit', {
        single
    });
});

app.post('/updateRecord', (req, res) => {
    let id = req.body.editid;
    let task = req.body.task;
    let status = req.body.status;
    let deadline = req.body.deadline; // Capture updated deadline
    let up = record.map(val => {
        if (val.id == id) {
            val.task = task;
            val.status = status;
            val.deadline = deadline; // Update deadline
        }
        return val;
    });
    record = up;
    console.log("Record updated");
    return res.redirect('/');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :https://localhost:${port}`);
});
