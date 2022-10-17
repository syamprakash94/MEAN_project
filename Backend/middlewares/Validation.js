const objectId = require("mongoose").Types.ObjectId;

const Validate = (req, res, next) => {
    console.log("haiii");
  const data = req.params.noteId;
  console.log("data", data);
  if (Object.keys(data).length === 0) {
    res.json("No data found");
  } else if (!objectId.isValid(data)) {
    res.status(400).json("id not valid");
  } else {
    next();
  }
}

module.exports = { Validate };
