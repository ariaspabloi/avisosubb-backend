import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes'
import postRouter from './routes/post.routes'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user/', userRouter)
app.use('/post/', postRouter)

const start = (): void => {
  try {
    app.listen(8080, () => {
      console.log('Server is Successfully Running, and App is listening on port ')
    })
  } catch (error) {
    console.log("Error occurred, server can't start", error)
  }
}

start()
