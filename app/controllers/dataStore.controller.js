const db = require("../models");
const config = require("../config/auth.config");
const dataStore = db.dataStore;
const Op = db.Sequelize.Op;
const uploadFile = require("../middleware/upload");
const fs = require("fs");
const baseUrl = "https://opmdata.gem.spc.int/shoreline/api/files/";

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    
    dataStore.findAll({ order: [['id', 'DESC']] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving organizations."
        });
      });
  };

  //Create
  exports.findOrCreate = async(req, res) => {
    try{
        await uploadFile(req, res);
        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
          }
          //console.log('---------------')
          //console.log(req.body)
          //console.log(req.data)
        dataStore.create({
            title: req.body.title,
            abstract:req.body.abstract,
            temporalCoverageFrom: req.body.temporalCoverageFrom,
            temportalCoverageTo:req.body.temportalCoverageTo,
            language: req.body.language,
            version: req.body.version,
            openAccess:req.body.openAccess,
            dataType:req.body.dataType,
            project:req.body.project,
            spatialRepresentationInfo:req.body.spatialRepresentationInfo,
            westBoundingLongitude:req.body.westBoundingLongitude,
            eastBoundingLongitude: req.body.eastBoundingLongitude,
            southBoundingLatitude: req.body.southBoundingLatitude,
            northBoundingLatitude: req.body.northBoundingLatitude,
            geospatialReferenceSystem: req.body.geospatialReferenceSystem,
            dataQualityChecked: req.body.dataQualityChecked,
            contactName: req.body.contactName,
            contactEmail: req.body.contactEmail,
            publisher: req.body.publisher,
            license: req.body.license,
            accessUrl: req.body.accessUrl,
            accessServer: req.body.accessServer,
            fileUrl: baseUrl+""+req.file.originalname,
            fileName: req.file.originalname,
            status: req.body.status,
            uploadMethod: req.body.uploadMethod,
            tag:req.body.tag,
            topic:req.body.topic
            })
              .then(async(datastore) => {
              //  await uploadFile(req, res);
                //if (req.file == undefined) {
                  //  return res.status(400).send({ message: "Please upload a file!" });
                 // }
              
                //  res.status(200).send({
                //    message: "Uploaded the file successfully: " + req.file.originalname,
                //  });
                res.send({ message: "Dataset registered successfully!" });
              })
    }
    catch(err){
        console.log(err)
        res.status(200).send({ message: "Please specify all the required parameters." });
      }
  };

  exports.findOrCreateNoFile = async(req, res) => {
    try{
      /*  await uploadFile(req, res);
        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
          }*/
          //console.log('---------------')
          //console.log(req.body)
          //console.log(req.data)
        dataStore.create({
            title: req.body.title,
            abstract:req.body.abstract,
            temporalCoverageFrom: req.body.temporalCoverageFrom,
            temportalCoverageTo:req.body.temportalCoverageTo,
            language: req.body.language,
            version: req.body.version,
            openAccess:req.body.openAccess,
            dataType:req.body.dataType,
            project:req.body.project,
            spatialRepresentationInfo:req.body.spatialRepresentationInfo,
            westBoundingLongitude:req.body.westBoundingLongitude,
            eastBoundingLongitude: req.body.eastBoundingLongitude,
            southBoundingLatitude: req.body.southBoundingLatitude,
            northBoundingLatitude: req.body.northBoundingLatitude,
            geospatialReferenceSystem: req.body.geospatialReferenceSystem,
            dataQualityChecked: req.body.dataQualityChecked,
            contactName: req.body.contactName,
            contactEmail: req.body.contactEmail,
            publisher: req.body.publisher,
            license: req.body.license,
            accessUrl: req.body.accessUrl,
            accessServer: req.body.accessServer,
            fileUrl: req.body.fileUrl,
            fileName: req.body.fileName,
            status: req.body.status,
            uploadMethod: req.body.uploadMethod,
            tag:req.body.tag,
            topic:req.body.topic
            })
              .then(async(datastore) => {
              //  await uploadFile(req, res);
                //if (req.file == undefined) {
                  //  return res.status(400).send({ message: "Please upload a file!" });
                 // }
              
                //  res.status(200).send({
                //    message: "Uploaded the file successfully: " + req.file.originalname,
                //  });
                res.send({ message: "Dataset registered successfully!" });
              })
    }
    catch(err){
        console.log(err)
        res.status(200).send({ message: "Please specify all the required parameters." });
      }
  };
//CREATE

//UPDATE


//DELETE

//SELECT
