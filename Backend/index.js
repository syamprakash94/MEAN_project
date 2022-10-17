const express = require("express");
const app = express();
const dotenv = require("dotenv")


const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors")
const path =require("path")
const multer = require("multer")

const userRoute =require("./routes/users")

const postRoute =require("./routes/posts");
const User = require("./models/User");
 
dotenv.config(); 

// mongoose connection
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true},()=>{
    console.log("connect to db");
}); 

// middle were
app.use(express.json());
app.use(morgan("common"))
app.use(cors())



// user route
app.use("/api/users" ,userRoute)   


// post routes
app.use("/api/posts" ,postRoute)

app.use("/images",express.static(path.join(__dirname,"/images")));

app.listen(5000,() => {
    console.log("backend running"); 
})


const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, "images");
    },
    filename: (req, file, callBack) => {
      callBack(null, `PostImage${file.originalname}`);
    },
  });
  
  var upload = multer({ storage: storage });
  app.post("/file/:id", upload.single("file"), async (req, res ,next) => {
    const file = req.file;
  
    if (file) {
      const user = await User.findByIdAndUpdate(req.params.id, {
        profilePicture: file.filename,
      });
      if (user) {
        res.status(200).json(user);
      }
    } else {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
   
  });
  