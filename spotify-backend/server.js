import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// app config
const app = express();
const  port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// testing post api only
// app.use((req, res, next) => {
//   console.log(">>> REQ:", req.method, req.url);
//   // log when response finishes
//   res.on("finish", () => console.log("<<< RES FINISHED:", req.method, req.url, res.statusCode));
//   next();
// });

// middlewares
app.use(express.json());
app.use(cors());

// initializing routes
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)

app.get('/', (req, res) => res.send("API working"))

app.listen(port, () => console.log(`Server started on ${port}`))