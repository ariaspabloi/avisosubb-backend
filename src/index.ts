import express from "express";
import cors from 'cors';
import userRouter from './routes/user.routes';
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user/', userRouter)

const start = async () => {
  try {
    app.listen(8080, () => {
      console.log('Server is Successfully Running, and App is listening on port ')
    })
  } catch (error) {
    console.log("Error occurred, server can't start", error)
  }
}

start()