const mongoose = require('mongoose')

const connection_string = process.env.CONNECTIONSTRING

mongoose.connect(connection_string).then((res)=>{
    console.log("MONGOOSE ATLAS CONNECTED SUCCESSFULLY WITH PFSERVER"); 
}).catch(err=>{
    console.log("MONGODB ATLAS connection failed");
    console.log(err);
    
    
})