//this is cloudinary importation here
const cloudinary = require("cloudinary");
//this is the dotenv importation here 
const dotenv = require("dotenv");

//calling the dotenv dot config method here
dotenv.config()


//calling the cloudinary function here

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.uploads = (file, folder)=>{
    return new Promise(resolve=>{
        cloudinary.UploadStream.uploads(file, (result)=>{
            resolve({
                url:result.url,
                id:result.public_id
            })
        })
    })
}