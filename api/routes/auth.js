import express from "express";
import { login, register,logout } from "../controllers/auth.js";

const router = express.Router();

// router.get("/", (req,res)=>{
//     res.send("Hello ,this is auth endpoint")
// })

router.post("/register", register)

router.post("/login", login)

router.post("/logout",logout);

export default router