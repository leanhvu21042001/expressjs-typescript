import { CloudinaryProvider } from './cloudinary.provider'

export const uploadImage = async (imagePath: string) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true
  }

  try {
    // Upload the image
    const result = await CloudinaryProvider.uploader.upload(imagePath, options)
    console.log(result)
    return result.public_id
  } catch (error) {
    console.error(error)
  }
}

export const getAssetInfo = async (publicId: string) => {
  const options = {
    colors: true
  }

  try {
    const result = await CloudinaryProvider.api.resource(publicId, options)
    console.log(result)
    return result.colors
  } catch (error) {
    console.error(error)
  }
}

export const createImageTag = (publicId: string, ...colors: any) => {
  const [effectColor, backgroundColor] = colors

  const imageTag = CloudinaryProvider.image(publicId, {
    transformation: [
      { width: 250, height: 250, gravity: 'faces', crop: 'thumb' },
      { radius: 'max' },
      { effect: 'outline:10', color: effectColor },
      { background: backgroundColor }
    ]
  })

  return imageTag
}
