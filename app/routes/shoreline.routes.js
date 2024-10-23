const { authJwt } = require("../middleware");
const controller = require("../controllers/shoreline.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/dbms/api/shoreline", controller.getListFiles);
  app.get("/dbms/api/shoreline/:name", controller.download);

  app.post("/dbms/api/shoreline",[authJwt.verifyToken, authJwt.isAdmin],controller.upload);

  app.delete("/dbms/api/shoreline/:name", [authJwt.verifyToken, authJwt.isAdmin],controller.removeSync);

};
