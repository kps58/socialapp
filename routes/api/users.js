const express = require("express");
const {validationResult,check}  = require("express-validator")
const router  = express.Router();

router.post("/",[
    check("name","Name is required ").not().isEmpty(),
    check("email","Plaese enter valid email").isEmail(),
    check("password","password character above 6").isLength({
        min:6
    })
],(req,res)=>{
    const errors = validationResult(req);
   
    if(!errors.isEmpty())
    {
        return res.status(400).json({error:errors.array()})
    }

    res.send("Users api");
})

module.exports  = router;