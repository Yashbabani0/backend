import express from "express";

const app = express();
const port = 3000;

app.get("/", (req , res) => {
    res.render("index.ejs", {dayType: "a weekday", advice: "it's Time to work hard."});
});

app.listen(port, () => {
    console.log(`server runing on ${port}.`);
});