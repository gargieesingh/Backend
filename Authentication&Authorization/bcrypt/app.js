const bcrypt = require("bcryptjs");
const express = require("express");
const app = express();

const password = "mySecret123";

const saltRounds = 10;

//hashing the password
bcrypt.hash(password, saltRounds, (err, hash)=>{
    if(err){
        console.error("Error hashing password: ", err)
        return;
    }
    
    console.log("Hashed password: ", hash);
    
    bcrypt.compare(password, hash, (err, result)=>{
        if(err){
            console.error("Error comparing passwords: ", err);
            return;
        }
        if(result){
            console.log("Passwords match!");
        }else{
            console.log("Passwords do not match!");
        }
    })
})