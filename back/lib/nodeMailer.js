"use strict";
const nodemailer = require("nodemailer");
const fs = require("fs");
// async..await is not allowed in global scope, must use a wrapper
const nodeMailer = async (message) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.NODE_MAILER_USER,
      pass: process.env.NODE_MAILER_PASS,
    },
  });

  // send mail with defined transport object
  await transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent:" + info.response);
    }
  });
};

module.exports = {
  nodeMailer,
};
/*
    const message = {
      from: `"CRRHAB 👻" ${process.env.NODE_MAILER_USER}`, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      html: html, // html body
      attachments: [
        {
          filename: "event.ics",
          content:
            "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//hacksw/handcal//NONSGML v1.0//EN\r\nBEGIN:VEVENT\r\nUID:12345\r\nDTSTAMP:20230428T120000Z\r\nDTSTART:20230510T140000Z\r\nDTEND:20230510T150000Z\r\nSUMMARY:Meeting with John Doe\r\nLOCATION:456 Main Street\r\nEND:VEVENT\r\nEND:VCALENDAR",
          contentType: "text/calendar",
        },
        {
          filename: "image.jpeg",
          path: "https://images.pexels.com/photos/16511744/pexels-photo-16511744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          filename: "git.zip",
          path: "https://github.com/youssef-of-web/state-municipality-tunisia/archive/refs/heads/main.zip",
        },
      ],
    };
    */
