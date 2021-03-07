// const { validationResult } = require("express-validator");
// const HttpError = require("../models/http-error")
// const fileUpload = require("../middleware/file-upload")
// const Up = require("../models/UploadRecord")



// const createR = async (req, res, next) => {
  



//   console.log(req.files);

//   // const title = req.body.title;
//   const createdPlace = new Up({
    
//     uploadAffidavit: req.files[0],
//     uploadVaqalat: req.files[1],
//     uploadWitness: req.files[2]

//   });

//   createdPlace.save().then(savedData => {
//     console.log(savedData);
//     res.status(201).json({ place: savedData });
//   })
//     .catch(err => {
//       const error = new HttpError(
//         'Creating rec failed, please try again.',
//         500
//       );
//       return next(error);
//     });
// };


// exports.createR  = createR ;










const express=require("express");
const Up = require("../models/UploadRecord")
const multer = require("multer");
var path = require('path');
var fs = require('fs');
const app=express();



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploadFiles');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
  });
 
   const uploads = multer({ storage: storage});

const createR=app.post('/doc',uploads.array('image'), (req, res, next) => {
    var file = req.files;
    var rec = new Up;
    var path=req.files.map(recfile=>
      path=recfile.path)
 


      // rec.LawyerName= req.body.LawyerName;
      // rec.PartyName= req.body.PartyName;
       
        

     rec.pathii="http://localhost:2000/"+path;
     var a=rec.pathii.slice(22,51)
     var b=rec.pathii.slice(52,81);
     var c=rec.pathii.slice(82,111);
     var d=rec.pathii.slice(112,141);
     var e=rec.pathii.slice(142,171);
     var f=rec.pathii.slice(172,201);
     var g=rec.pathii.slice(202,231);
     var h=rec.pathii.slice(232,261);
     var i=rec.pathii.slice(262,291);
     var j=rec.pathii.slice(292,321);
     var k=rec.pathii.slice(322,351);
     var l=rec.pathii.slice(352,381);
     var m=rec.pathii.slice(382,411);
     var n=rec.pathii.slice(412,441);
     var o=rec.pathii.slice(442,471);



    //  console.log(s)
     rec.patha="http://localhost:2000/"+a;//ok
     rec.pathb="http://localhost:2000/"+b;
     rec.pathc="http://localhost:2000/"+c;
     rec.pathd="http://localhost:2000/"+d;
     rec.pathe="http://localhost:2000/"+e;
     rec.pathf="http://localhost:2000/"+f;
     rec.pathg="http://localhost:2000/"+g;
     rec.pathh="http://localhost:2000/"+h;
     rec.pathi="http://localhost:2000/"+i;    
    rec.pathj="http://localhost:2000/"+j;
    rec.pathk="http://localhost:2000/"+k;
    rec.pathl="http://localhost:2000/"+l;
    rec.pathm="http://localhost:2000/"+m;
    rec.pathn="http://localhost:2000/"+n;
    rec.patho="http://localhost:2000/"+o;






    
      
  
      rec.img.contentType = 'image/png';
      rec.save((err, result) => {
          console.log(result)
  
          if (err) return console.log(err)
          console.log('saved to database')
          res.send(rec);
      })
  });
  
  app.get('/img/:fname', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../uploadFiles/' + req.params.fname));
  });
  const getRecords=app.get('/record', function(req, res, next) {
    Up.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });
  });

   module.exports={getRecords,createR}
