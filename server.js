//server start karna hai 
const app = require('./src/app')
const dbConnection = require('./src/db/db')
app.listen(4000,()=>{
    console.log('server is running on port 4000')
})


// /database se connect krna hai //