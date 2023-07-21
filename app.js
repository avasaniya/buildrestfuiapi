const express = require("express");
const app = express ();
require("./db/conn");
const Student =require("./modeals/students");
const port = process.env.PORT || 8000 ; // thi node express and mongoose bene conecting thay che 


app.use(express.json());
//req kare methord pela "undefined" hoy jo a lagavi to tene jose deta show kare che 

//promish
//methord:-1
                                        //post req atle creat karva mate use thay
// app.post("/student",(req,res) => {  
//     console.log(req.body);
//     //promish ape che kato deta apse athva error avse
//     const user = new Student(req.body)
//     //promish ape che kato deta apse athva error avse
//     user.save().then(()=>{
//             res.status(200).send(user);
//         }).catch((error)=>{ //catch error schema aveli error show kare che 
//             res.status(400).send(error);
//         })
// })

                                            //REST API using Async-Await with Nodejs Express
//methord:-2
    //    app.post("/student",async(req,res) => {
    //         try {
    //             const user = new Student(req.body);
    //             const result = await user.save();
    //             res.status(200).send(result);
    //             console.log(result);
    //         } catch (error) {
    //             res.status(400).send(error);
    //         }
    //    })

                            // Get Request in REST API using NodeJS & MongoDB
// app.get("/student",async(req,res) => {
       
//     try {
//             const result = await Student.find();
//             res.send(result);
//     } catch(error) {
//             res.send(error);
//     }
// })

//get indivisual data find

// app.get("/student/:id",async(req,res)=>{
//     try{
//             const _id=req.params.id;

//             const result=await Student.findById({_id:"64ba16e124d288bdd91213cb"});//jaye key and vluse sem hoy ek lakho to chale "const key=req.params.id;","app.get("/student/:value",async(req,res)=>{"
//             console.log(result);
//             if (!result) {
//                 return res.send();
//             } else {
//                 res.send(result);
//             }
//         }catch(error){
//             res.status(500).send(error);
//         }
// })

// app.get("/student/Fullname",async(req,res)=>{
//     try{
//             const Fullname=req.params.Fullname;
//             const result=await Student.find({Fullname: 'jay'});//jaye key and vluse sem hoy ek lakho to chale "const key=req.params.id;","app.get("/student/:value",async(req,res)=>{"
//             console.log(result);
//             if (!result) {
//                 return res.send();
//             } else {``
//                 res.send(result);
//             }
//         }catch(error){
//             res.status(500).send(error);
//         }
// })

//update
// RESTFul API ✌ Handling PUT❓ PATCH Request in REST API using NodeJS & MongoDB

app.patch("/student/:id",async(req,res)=>{
    try{
            const _id=req.params.id;
            const updateresult=await Student.findByIdAndUpdate(_id,req.body,{new:true}) //{new:true} no use jyare postmen thi updeat kari ye tyare consol ma updete output lava mate thay che 
            console.log(updateresult);
            if (!updateresult) {
                return res.status(401).send();
            } else {
                res.send(updateresult);
            }
        }catch(error){
            res.status(500).send(error);
        }
})

//DELETE
// RESTFul API ✌ Handling DELETE Request in REST API using NodeJS & MongoDB 

// app.delete("/student/:id",async(req,res)=>{
//     try {        
//         const _id=req.params.id;
//         const resultdelete=await Student.findByIdAndDelete(_id);
//         console.log(resultdelete);
//         if (!resultdelete) {
//             return res.status(400).send();
//         } else {
//             res.send(resultdelete);
//         }
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

// app.delete("/student/Address",async(req,res)=>{
//     try {       
//         const Address=req.params.Address;
//         const resultAddress = await Student.deleteOne({Address:"mubhai"});
//         console.log(resultAddress);
//         if (!resultAddress) {
//             return res.status(400).send();
//         } else {
//             res.send(resultAddress);
//         }
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

app.listen(port , () => {
    console.log("conecting port" , `${port}`);
});