const mongoose=require("mongoose")

const UploadRecord=new mongoose.Schema({
    pathii:{type: String, requied: true },

    patha:{type: String, requied: true },
    pathb:{type: String, requied: true },
    pathc:{type: String, requied: true },
    pathd:{type: String, requied: true },
    pathe:{type: String, requied: true },
    pathf:{type: String, requied: true },
    pathg:{type: String, requied: true },
    pathh:{type: String, requied: true },
    pathi:{type: String, requied: true },
    pathj:{type: String, requied: true },
    pathk:{type: String, requied: true },
    pathl:{type: String, requied: true },
    pathm:{type: String, requied: true },
    pathn:{type: String, requied: true },
    patho:{type: String, requied: true },




    pathafid:{type: String, requied: true },






    img: { data: Buffer, contentType: String }
})
const  UploadRecordss=mongoose.model("UploadRecord",UploadRecord)

module.exports=UploadRecordss;