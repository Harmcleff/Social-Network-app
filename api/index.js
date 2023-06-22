import express from "express"
const app = express();
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import postRoutes from "./routes/posts.js"
import likeRoutes from "./routes/likes.js"
import cookieParser from "cookie-parser";
import cors from "cors"

//Middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/comments", commentRoutes)
app.use("/api/v1/posts", postRoutes)
app.use("/api/v1/likes", likeRoutes)



app.listen(8800,()=>(
    console.log("working!")
))