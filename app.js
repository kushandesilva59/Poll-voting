const express = require("express");
const mysql = require('mysql')
const cors = require('cors')
const app = express();


app.use(cors());
app.use(express.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "poll_voting"
});





app.post("/post", (req, res) => {

  
});



app.post("/api/polls/create", (req, res) => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected..!!");
        var sql = `INSERT INTO polls VALUES (${req.query.id}, '${req.query.poll}');`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Record Inserted Successfully!");
        });

        con.end(function(err) {
            if (err) throw err;
            console.log("Connection closed successfully!");
        });
    });

    const data = { message: "Record Inserted Successfully!" }

    res.json(data)
});

app.put(`/api/polls/edit`, (req, res) => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected..!!");
        var sql = `UPDATE polls SET id=${req.query.id},poll='${req.query.poll}' WHERE id=${req.query.id};`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Record Updated Successfully!");
        });

        con.end(function(err) {
            if (err) throw err;
            console.log("Connection closed successfully!");
        });
    });

    const data = { message: "Record Updated Successfully!" }

    res.json(data)
});

app.delete(`/api/polls/delete`, (req, res) => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected..!!");
        var sql = `DELETE from polls WHERE id=${req.query.id};`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Record Deleted Successfully!");
        });

        con.end(function(err) {
            if (err) throw err;
            console.log("Connection closed successfully!");
        });
    });

    const data = { message: "Record Deleted Successfully!" }

    res.json(data)
});


app.get(`/api/polls`, (req, res) => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected..!!");
        var sql = `SELECT * from polls WHERE id=${req.query.id};`;

        console.log(sql)
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Record Deleted Successfully!");
            
           
            res.json(result);
        });

        con.end(function(err) {
            if (err) throw err;
            console.log("Connection closed successfully!");
        });

       
    });
});



app.get(`/api/polls/:pollId/vote/:id`, (req, res) => {
    var pol_id = req.params['pollId']  
    console.log(pol_id)

    var id = req.params['id']  
    console.log(id)

    console.log(req.params.id)
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected..!!");
        var sql = `INSERT INTO votes VALUES(${id}, ${pol_id});`;

        console.log(sql)
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Record Insert Successfully!");
        
           
            res.json(result);
        });

        con.end(function(err) {
            if (err) throw err;
            console.log("Connection closed successfully!");
        });
    });
});

app.get(`/api/categories`, (req, res) => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected..!!");
        var sql = `SELECT * from categories;`;

        console.log(sql)
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Categories!");
            
           
            res.json(result);
        });

        con.end(function(err) {
            if (err) throw err;
            console.log("Connection closed successfully!");
        });
    });
});

app.get("/", (req, res) => {
    console.log("Get");
    const data = { message: "Hello world!..." }

    res.json(data)
});

const PORT = process.env.PORT || 8080;

app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);