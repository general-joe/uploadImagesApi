//this is the importation of multer package
const multer = require("multer")

//this is the specification of the storage engine
const storage = multer.diskStorage({
    destination:(req, file, cb){
        cb(null, "./uploads/")
    },

    filename:(req, file, cb)=>{
        cb(null, new Date.toString() + "-" + file.originalname) 
    }

})


//file validation

const fileFilter= (req, file, cb)=>{
    if(file.mimetype ==="image/jpeg" || file.mimetype === "image/png"){
        cb(null, true)
    }else{
        // prevent the upload here
        cb({message: "unsupported File Format"}, false)
    }
}


const upload= multer({
    storage: storage,
    limits:{fileSize: 1024 * 1024},
    fileFilter: fileFilter
})



module.exports= upload;
