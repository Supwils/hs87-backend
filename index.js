const auth = require('./backend/src/auth');
const article = require('./backend/src/articles');
const profile = require('./backend/src/profile');
const following = require('./backend/src/following');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userSchema = require('./backend/src/userSchema');
const User = mongoose.model('user', userSchema);
const connectionString = 'mongodb+srv://huahaoshang2000:Soho7436..@hs87-rice.htqq8u4.mongodb.net/?retryWrites=true&w=majority'

const corsOptions = {origin:"http://localhost:3000", credentials:true};
//const upCloud = require('./backend/src/uploadCloudary.js') 

const hello = (req, res) => res.send({ hello: 'world' });


const app = express();
//upCloud.setup(app) 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.get('/', hello);
auth(app);
article(app);
profile(app);
following(app);


// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 8888;
const server = app.listen(port, () => {
     const addr = server.address();
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
});