import express from "express";
import morgan from "morgan";
import urlRoutes from "./routes/url.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req,res) => {
    res.json({
        success: true,
        message: "URL shortner API is running successfully"
    })
})

app.use("/api/v1/urls", urlRoutes)

export default app;