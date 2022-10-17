const jwt = require('jsonwebtoken')

const tokenCheck = (req,res,next)=>{
    const token = req.headers["auth-token"];

    console.log(token);

    if(token==undefined){
    res.status(400).json("please provide token")
    }

   jwt.verify(token,process.env.JWT_SECRET, (err,res)=>{
  if(err){
    res.json("Autentication failed")
  }else{
    next()
  }
   } )


}

module.exports = {tokenCheck}