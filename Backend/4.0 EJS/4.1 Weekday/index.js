import express from 'express';

const app = express();  
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    if (day === 6 || day === 0) {
        res.render("index.ejs", {dayType: "a weekend", advice: "It's time to relax!"});
    } else
    res.render("index.ejs", {dayType: "a weekday", advice: "It's time to go to work!"});   
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
