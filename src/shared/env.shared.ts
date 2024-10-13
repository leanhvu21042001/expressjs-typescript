interface IENV {
  NODE_ENV: string | undefined
  PORT: string | undefined
  POSTGRES_URI: string | undefined
}

export const ENV: IENV = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  POSTGRES_URI: process.env.POSTGRES_URI
}
