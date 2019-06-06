"use strict";

const express = require("express");
const multer = require("multer"); // Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

const checkJwtToken = require("../controllers/session/check-jwt-token");
const getUserProfile = require("../controllers/user/get-user-profile");
const getUserWall = require("../controllers/user/get-user-wall");
const uploadAvatar = require("../controllers/user/upload-avatar");
const updateUserProfile = require("../controllers/user/update-user-profile");

const upload = multer();

const router = express.Router();

router.get("/user", checkJwtToken, getUserProfile);
router.put("/user", checkJwtToken, updateUserProfile);
router.post(
  "/user/avatar",
  checkJwtToken,
  upload.single("avatar"),
  uploadAvatar
);
router.get("/user/wall", checkJwtToken, getUserWall);

module.exports = router;
