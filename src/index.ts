import express from 'express';
import * as dotenv from 'dotenv'
import TasksRouter   from './routes/Tasks' 
import { db_connect } from './config/db';
import { apiErrorHandlerMiddleWare } from './middleware/errorHandler';


const app = express()
const port = process.env.PORT ?? 5000
dotenv.config()


//Middlewares
app.use(express.json())



//Routes
app.get('/', (req, res) => { res.send('Main Get')})
//Tasks
app.use('/api/v1/tasks',TasksRouter)


//custom error handler
app.use(apiErrorHandlerMiddleWare)

//Start
async function start() {
    try {
        
    await db_connect(process.env.DB_CONNECTION_STRING ?? '')
    app.listen(port, () => { console.log(`App listening on http://localhost:${port}`) })
    } catch (error) {
        console.log(error)
    }
}


start()
