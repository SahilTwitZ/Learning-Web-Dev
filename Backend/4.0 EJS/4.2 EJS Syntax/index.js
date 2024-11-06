import express from 'express';
import bodyParser from 'body-parser';

const app = express();  
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["Apple", "Rassberry", "Chocolate"],
    htmlContent: "<em> This is some em text </em>",
};

res.render("index.ejs", data);

});

app.listen(port, () => {                         
  console.log(`Server is running on port ${port}`);
});



