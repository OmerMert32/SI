import express from "express";

const app = express();

app.use(express.static("public"));


app.get("/randomNumbers", (req, res) => {
    res.send({ data: randomNumbers });
});


const PORT = 8080;
app.listen(PORT, () => console.log("server is running on port", PORT))