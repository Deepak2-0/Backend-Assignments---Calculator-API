const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res)=>{
    res.send("Hello world!");
})

app.post("/add", (req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    if(Number(num1) !== parseFloat(num1)  || Number(num2) !== parseFloat(num2)){
        //res.status(404).send("invalid data types");
        res.send({"status": "error","message": "invalid data types"});
        return;
    }
    
    if(parseFloat(num1)> 1000000  || parseFloat(num2) > 1000000){
        //res.status(404).send("Overflow");
        res.send({"status": "failure","message": "Overflow"});
        return;
    }

    const result = parseFloat(num1) + parseFloat(num2);

    const answer = {
        "status": "success",
        "message": "the sum of given two number",
        "sum": result
    }
    res.send(answer);
})

app.post("/sub", (req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    if(Number(num1) !== parseFloat(num1)  || Number(num2) !== parseFloat(num2)){
        //res.status(404).send("invalid data types");
        res.send({"status": "error","message": "invalid data types"});
        return;
    }
    
    if(parseFloat(num1)< -1000000  || parseFloat(num2) < -1000000){
        //res.status(404).send("Underflow");
        res.send({"status": "failure","message": "Underflow"});
        return;
    }

    const result = parseFloat(num1) - parseFloat(num2);

    const answer = {
        status: "success",
        message: "the difference of given two number",
        difference: result
    }
    res.send(answer);
})

app.post("/multiply", (req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    if(Number(num1) !== parseFloat(num1)  || Number(num2) !== parseFloat(num2)){
        //res.status(404).send("invalid data types");
        res.send({"status": "error","message": "invalid data types"});
        return;
    }
    
    if(parseFloat(num1)> 1000000  || parseFloat(num2) > 1000000){
        //res.status(404).send("Overflow");
        res.send({"status": "failure","message": "Overflow"});
        return;
    }

    const result = parseFloat(num1) * parseFloat(num2);

    const answer = {
        status: "success",
        message: "The product of given numbers",
        result: result
    }
    res.send(answer);
})

app.post("/division", (req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    

    if(parseFloat(num2) === 0){
        //res.status(400).send("Cannot divide by zero");
        res.send({"status": "error","message": "Cannot divide by zero"});
        return;
    }

    const result = parseFloat(num1) / parseFloat(num2);

    const answer = {
        status: "success",
        message: "The division of given numbers",
        result: result
    }
    res.send(answer);
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;