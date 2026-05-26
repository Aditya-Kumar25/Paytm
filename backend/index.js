const express = require("express");
const mainRouter = require("./routes/index")
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

app.use("/app/v1",mainRouter);


app.listen(3000,()=>{
    console.log("Listening to http:127.0.0.1:3000")
})