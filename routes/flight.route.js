const express=require("express");
const {FlightModel} = require("../models/flight.model");
const FlightRouter=express.Router();

FlightRouter.get("/",async(req,res)=>{
    const payload=req.body;
    const q=req.query.device1;
    const q2=req.query.device2;
    const userID_in_req=req.body.userID;
    try {
       
    
            const posts=await FlightModel.find()
            res.send(posts);
        
        
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
})
FlightRouter.get("/flights/:id",async(req,res)=>{
    const payload=req.body;
    const q=req.query.device1;
    const q2=req.query.device2;
    const id=req.params.id;
    const userID_in_req=req.body.userID;
    try {
            const posts=await FlightModel.findOne({"_id":id})
            console.log(posts);
            res.send(posts);
        
        
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
})

FlightRouter.post("/",async(req,res)=>{
    const payload=req.body;
    console.log("payload",payload);
    try {
        const new_post=new FlightModel(payload);
        await new_post.save();
        res.send("Created the post");
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
})

FlightRouter.patch("/flights/:id",async(req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    const post =await FlightModel.findOne({"_id":id});
    const userID_in_post=post.userID;
    const userID_in_req=req.body.userID;
    try {
          await FlightModel.findByIdAndUpdate({"_id":id},payload)
          res.send("Updated the post");
        
    } catch (error) {
        console.log(err);
        res.send("something went wrong");
    }
})


FlightRouter.delete("/flights/:id",async(req,res)=>{
    // const payload=req.body;
    const id=req.params.id;
    const post =await FlightModel.findOne({"_id":id});
    const userID_in_post=post.userID;
    const userID_in_req=req.body.userID;
    try {
       
    
          await FlightModel.findByIdAndDelete({"_id":id})
          res.send("Deleted the post the post");
        
    } catch (error) {
        console.log(err);
        res.send("something went wrong");
    }
})

module.exports={
    FlightRouter
}