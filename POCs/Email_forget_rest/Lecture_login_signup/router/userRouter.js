

const express=require("express");
const userRouter=express.Router();

const{createUser,getAllUser,getUser,deleteUser}=require("../controller/userController");
const { protectRouteMiddleware, isAdminMiddleWare } = require("../controller/authController");
userRouter.post("/", createUser)
userRouter.get("/",protectRouteMiddleware,isAdminMiddleWare,  getAllUser);
userRouter.get("/:id", getUser);
userRouter.delete("/:id", protectRouteMiddleware, deleteUser);

module.exports = userRouter;



/****in this also we can write************/ 
// const express = require('express');
// const userRouter = express.Router();
// const { createUser, getAllUser, getUser, deleteUser } = require("../controller/userController");
// const { protectRouteMiddleware, isAdminMiddleWare } = require('../controller/authController');

// userRouter
//     .post("/", createUser)
//     .get("/", protectRouteMiddleware, isAdminMiddleWare, getAllUser)
//     .get("/:id", getUser)
//     .delete("/:id", protectRouteMiddleware, deleteUser);

// module.exports = userRouter;