const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running on Port 5000"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dendrixx97@gmail.com",
    pass: "",
    type: "OAUTH2",
    clientId:
      "577145849499-m931k94rbpvdgqhoik4bfqruseie8686.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04p-1Z66FlC9cCgYIARAAGAQSNwF-L9Ir0GEaapgzLyGqj6J811mc3UHJMmuzA7zEAH8xXQA2Gkw9G0OwqAKt7suyXanh_JHp54E",
    accessToken:
      "ya29.a0AfB_byCkhP1kTp0wnIZzn-UAE1uMJ3z6IK8Du4NSbnluUzUft8L1NQbVe2C8ZpZlqo-czDab2K0FAqyqD-xhvEBkp2gT5tx822J-vdoFes49s-jJ5WweeNfGO2tHFLj0D76W042qABUkN3K6Dq3pfWHfAYuSbQZo-5e6hwaCgYKAWoSARMSFQHsvYls0-e7RYpd4qXEiqXRa1UWLg0173",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "dendrixx97@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
