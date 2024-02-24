const express = require('express');
const cors  = require('cors');

const authRoutes = require('./routes/auth')

const app = express();
const PORT = process.env.PORT ||  5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/',(req, res)=>{
    res.send("Hello World")
})

app.use('/auth' , authRoutes)


app.listen(PORT , ()=> console.log(`server is running on ${PORT}`));