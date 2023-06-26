import 'dotenv/config'
import AWS from 'aws-sdk'
import { type GetObjectOutput } from 'aws-sdk/clients/s3'
const S3_BUCKET = process.env.S3_BUCKET
const s3 = new AWS.S3()
if (S3_BUCKET == null) {
  throw new Error('S3_BUCKET is not defined')
}

export const saveImages = async (names: string[], images: Express.Multer.File[] | any): Promise<string[]> => {
  const results = []
  for (let i = 0; i < names.length; i++) {
    const direction = names[i]
    const result = await saveImage(direction, images[i])
    results.push(result)
  }
  return results
}

const saveImage = async (direction: string, image: Express.Multer.File): Promise<string> => {
  direction = `images/posts/${direction}.${image.originalname.slice(image.originalname.lastIndexOf('.') + 1)}`
  const uploadParams = {
    Bucket: S3_BUCKET,
    Key: direction,
    Body: image.buffer
  }
  const upload = await s3.upload(uploadParams).promise()
  return upload.Location
}

export const getImage = async (direction: string): Promise<GetObjectOutput> => {
  return await s3
    .getObject({
      Bucket: S3_BUCKET,
      Key: `images/posts${direction}`
    })
    .promise()
}
