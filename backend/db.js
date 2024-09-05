const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"


async  function connectToMongo(){  await

  mongoose.connect(mongoURI).then(()=>
    console.log("connected to mongo sucessfully"))
       .catch(err => console.log(err));

}

// const connectToMongo = () =>{
//   mongoose.connect(mongoURI);
//   console.log("connected");

// }
module.exports = connectToMongo;