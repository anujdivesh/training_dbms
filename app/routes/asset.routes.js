const { authJwt } = require("../middleware");
const controller = require("../controllers/asset.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/dbms/api/assets", controller.getListFiles);
  app.get("/dbms/api/assets/:name", controller.download);

  app.post("/dbms/api/assets",[authJwt.verifyToken, authJwt.isAdmin],controller.upload);

  app.delete("/dbms/api/assets/:name", [authJwt.verifyToken, authJwt.isAdmin],controller.removeSync);

};
