const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const setupMiddlewares = require('./middleware');
const serviceRoutes =require('./routes/serviceRoute');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

setupMiddlewares(app);

mongoose.connect(process.env.MONGODB_URI, {})
.then(()=>{
   console.log('mongoose connected');
})
.catch((e)=>{
   console.log('failed to connect');
})

app.use('/api/services', serviceRoutes);

 app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});