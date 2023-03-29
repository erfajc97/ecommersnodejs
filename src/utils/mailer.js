const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "jotik1989@gmail.com",
    pass: "xkfdhlzxhsmnwclm",
  },
});

module.exports = transporter;
