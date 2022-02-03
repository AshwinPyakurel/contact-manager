const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const router = express.Router();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/api', (req,res) => {
    console.log('hello');
});

app.use("/pai", router);

app.listen(port,()=>{
    console.log(`listening @ ${port}`);
})