
const { authJwt } = require("../middleware");
const controller = require("../controllers/dataStore.controller");

module.exports = app => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  const dataStore = require("../controllers/dataStore.controller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", dataStore.findAll);

  app.use('/dbms/api/datastore', router);


  app.post(
    "/dbms/api/datastore/add",
    controller.findOrCreate
  );
  app.post(
    "/dbms/api/datastore/addnofile",
    controller.findOrCreateNoFile
  );
};