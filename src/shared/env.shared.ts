interface IENV {
  NODE_ENV: string | undefined
  PORT: string | undefined
  // database
  POSTGRES_URI: string | undefined

  // upload files
  CLOUDINARY_API_KEY: string | undefined
  CLOUDINARY_API_SECRET: string | undefined
  CLOUDINARY_CLOUD_NAME: string | undefined
}

export const ENV: IENV = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,

  // database
  POSTGRES_URI: process.env.POSTGRES_URI,

  // upload files
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
}
