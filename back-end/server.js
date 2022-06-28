const express = require("express");
const app = express();
const userRoutes = require('./routes/userRoutes');

const rooms = ['general' , 'tech', 'finance', 'crypto'];
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

//Routes
app.use('/users', userRoutes);

//link MongoDB
const mongoose = require('mongoose');
const { socket } = require("../front-end/src/context/appContext");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('Connected to MongoDB');
})

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

// app.get('/rooms', (req, res) =>{
//     res.json(rooms)
// })

// //socket connection
// io.on('connection',(socket) =>{

//     socket.on('join-room', async(room)=>{
//         socket.join(room)
//     })


// })

server.listen(process.env.PORT,()=>{
    console.log(`Lisening to port: ${process.env.PORT}`);
})