import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null // a error would be great here
        const responce = await cloudinary.uploader.upload(localFilePath,
            {
                resource_type: "auto"
            }
        )
        console.log("The file is successfully uploaded on cloudinary", responce.url)
        return responce
    }
    catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        console.log("file upload failed", error)
        return null
    }
}

export {uploadOnCloudinary}