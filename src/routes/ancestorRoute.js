const controller = require("../controller/ancestorController");
const express = require("express");
const router = express.Router();

router.get("/all", controller.findAllAncestor);

router.get("/:id", controller.findAncestorById);

router.post("/add", controller.addNewAncestor);

router.patch("/:id", controller.updateAncestor);

router.delete("/:id", controller.deleteAncestor);

module.exports = router;
