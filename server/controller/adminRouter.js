var express = require("express");
const { Collection } = require("mongoose");
var router = express.Router();
var adminModel = require("../models/adminModel");
var path = require("path");

router.get("/", (req, res, next) => {
  res.send("its working , admin router invoked");
});

router.post("/cpadmin", (req, res, next) => {
  var collection_name = "register";
  adminModel
    .cpadmin(collection_name, req.body)
    .then((result) => {
      if (result.length == 0) res.json({ response: 0 });
      else {
        if (req.body.npass == req.body.cnpass) {
          adminModel
            .upadmin(collection_name, req.body)
            .then((result) => {
              res.json({ response: 2 });
            })
            .catch((err) => {
              console.log(err);
            });
        } else res.json({ response: 1 });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

/*this for update admin profile */
router.post("/epadmin", (req, res, next) => {
  var collection_name = "register";
  adminModel
    .epadmin(collection_name, req.body)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/upradmin", (req, res, next) => {
  var collection_name = "register";
  adminModel
    .upradmin(collection_name, req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/admincategory", (req, res, next) => {
  //console.log(req.body)
  collection_name = "category";
  adminModel
    .addcategory(collection_name, req.body)
    .then((result) => {
      // console.log(result)
      res.json(result);
    })
    .catch((err) => {
      res.json({ response: "failed" });
    });
});

router.get("/fetchadmincategory", (req, res, next) => {
  collection_name = "category";
  adminModel
    .loadcategory(collection_name)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send("fail");
    });
});

router.post("/manageproducts", (req, res, next) => {
  console.log(req.body);
  collection_name = "product";
  adminModel
    .addproduct(collection_name, req.body)
    .then((result) => {
      console.log(result);
      res.json({ response: "success" });
    })
    .catch((err) => {
      res.json({ response: "failed" });
    });
});

router.get("/fetchproducts", (req, res, next) => {
  collection_name = "product";
  adminModel
    .loadproduct(collection_name)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send("fail");
    });
});

router.post("/uploadpic", (request, response) => {
  var collection_name = "product";
  var uploadFile = request.files.product_image;
  var filename = Date.now() + path.extname(uploadFile.name);

  uploadFile.mv(
    path.join(__dirname, "../../dist/myproject/assets/product", filename)
  );
  uploadFile.mv(path.join(__dirname, "../../src/assets/product", filename));

  adminModel
    .uploadImage(collection_name, request.body.pid, filename)
    .then((result) => {
      console.log("it is working:admin router");
      response.send({ status: true });
    })
    .catch((err) => {
      response.send({ status: false });
    });
});

module.exports = router;
