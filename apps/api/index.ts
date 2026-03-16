import Elysia from "elysia";
import cors from "@elysiajs/cors";
import config from "./config/config";
import user from "./routes/user";

new Elysia({prefix: '/api/v1'})
.use(cors({origin: ['localhost:3000']}))
.use(user)

.get('/health', ({status}) => {
    return status(200, {message: "Server is healthy"})
})

.listen(config.port, () => {
    console.log(`server listening on port ${config.port}`);
})