

// const express = require("express");
// const authRouter=express.Router();



// const  {loginHandler,signupHandler,logoutHandler, 
// protectRouteMiddleware,  profilehandler,
// } =require("../controller/authController");

// authRouter.post("/signup", signupHandler);
// authRouter.post("/login", loginHandler);
//  authRouter.get("/logout", logoutHandler);
//  authRouter.get("/profile",  protectRouteMiddleware,  profilehandler);

//  module.exports=authRouter;



/***************Or same thimgs wee can write here ************************/ 

const express = require('express');
const authRouter = express.Router();

const { loginHandler, signupHandler, logoutHandler, protectRouteMiddleware, profilehandler,
} = require("../controller/authController");

authRouter
    .post("/login", loginHandler)
    .post("/signup", signupHandler)
    .get("/logout", logoutHandler)
    .get("/profile", protectRouteMiddleware, profilehandler);

module.exports = authRouter;