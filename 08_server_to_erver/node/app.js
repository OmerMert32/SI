import express from "express"
const app = express();

// task create a route with the endpoint requestFastaPI



const PORT = 8080
app.listen(8080, () => console.log("Server is running on port", PORT))



app.get("/requestFastApi", async (req, res) => {
    try {
      const response = await fetch('http://localhost:8000/fastapiData'); // Assuming FastAPI runs on localhost:8000
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
  });

  app.get("/expressData", (req, res) => {
    res.send({ isRunning: true});
  })


  

  // nodemon app.js