/* eslint linebreak-style: ["error", "windows"]*/

const admin = require("firebase-admin");
const sendEmail = require("./sendEmail");

admin.initializeApp();

exports.sendEmail = sendEmail;
