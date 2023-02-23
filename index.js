const express =require("express");
const {connection} =require("./config/db");
const {UserRouter} =require("./routes/user.route");
const {FlightRouter} =require("./routes/flight.route")
const {authenticate}=require("./middleware/authenticate.middleware")

const cors=require("cors");

const app=express();
app.use(cors({
    origin:"*"
}))
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("welcome");
});

app.use("/users",UserRouter);
app.use(authenticate)
app.use("/flights",FlightRouter);

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected tot he DB");
    } catch (error) {
        console.log("Trouble connecting to the DB");
    }
    console.log('running at 8080');
})