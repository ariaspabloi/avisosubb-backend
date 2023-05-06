/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes'
import postRouter from './routes/post.routes'
import authRouter from './routes/auth.routes'
// import { authenticateToken } from './middlewares/auth.middleware'
const app = express()
const port = Number(process.env.PORT) | 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth/', authRouter)
// app.use('/post/', authenticateToken, postRouter)
app.use('/post/', postRouter)
app.use('/user/', userRouter)

const start = (): void => {
  try {
    app.listen(port, () => {
      console.log(`Server is Successfully Running, and App is listening on port ${port}`)
    })
  } catch (error) {
    console.log("Error occurred, server can't start", error)
  }
}

start()
