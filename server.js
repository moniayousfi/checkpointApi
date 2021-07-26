const express=require('express');
require('dotenv').config({ path: './config/.env' })

const connectdb = require( './config/connectdb' )


const app =express();
const port =process.env.Port;
console.log(port)
connectdb();
app.use(express.json())
app.use('/users', require('./routes/users'))
app.listen(port,(err)=>
{
err?console.error(err):
console.log(`server is running on port ${port}`);


}
)