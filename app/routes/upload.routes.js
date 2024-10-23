const { authJwt } = require("../middleware");
const controller = require("../controllers/file.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/dbms/api/files", controller.getListFiles);
  app.get("/dbms/api/files/:name", controller.download);

  app.post("/dbms/api/upload",[authJwt.verifyToken, authJwt.isAdmin],controller.upload);

  app.delete("/dbms/api/files/:name", [authJwt.verifyToken, authJwt.isAdmin],controller.removeSync);

};
