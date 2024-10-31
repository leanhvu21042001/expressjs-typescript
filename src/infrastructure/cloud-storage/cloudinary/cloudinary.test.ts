import { createImageTag, getAssetInfo, uploadImage } from './cloudinary.service'
;(async () => {
  // Set the image to upload
  const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg'

  // Upload the image
  const publicId = await uploadImage(imagePath)

  // Get the colors in the image
  const colors = await getAssetInfo(publicId)

  // Create an image tag, using two of the colors in a transformation
  const imageTag = await createImageTag(publicId, colors[0][0], colors[1][0])

  // Log the image tag to the console
  console.log(imageTag)
})()
