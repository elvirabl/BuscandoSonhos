const controller = require("../controller/memberController");
const express = require("express");
const router = express.Router();

router.get("/all", controller.findAllMembers);

router.get("/:id", controller.findMemberById);

router.post("/add", controller.addNewMember);

router.patch("/:id", controller.updateMember);

router.delete("/:id", controller.deleteMember);

module.exports = router;

