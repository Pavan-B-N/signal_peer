const port = process.env.PORT || 3040;
const express = require("express")
const app = express()
const cors = require("cors")

const dotenv = require("dotenv")
dotenv.config()

const http = require("http")
const httpServer = http.createServer(app)
//webrtc
const {ExpressPeerServer}=require("peer")
const peerServer=ExpressPeerServer(httpServer)


//Allowed origins
const allowedOrigins = ["http://localhost:3000", "https://signalmessenger.netlify.app","https://hiccup.adaptable.app/"];

//middlewares
app.use(express.json())
app.use(cors({ origin: allowedOrigins }))

app.use("/peerjs",peerServer);


httpServer.listen(port, console.log(`server is running on port ${port} and origin is http://localhost:${port}`))