/* eslint linebreak-style: ["error", "windows"] */
const {defineSecret} = require("firebase-functions/params");
const {https} = require("firebase-functions");
const {createTransport} = require("nodemailer");
const cors = require("cors");

const corsHandler = cors({origin: true});

// Define secrets (only accessed at runtime)
const EMAIL_AUTH = defineSecret("EMAIL_AUTH");
const EMAIL_PASSWORD = defineSecret("EMAIL_PASSWORD");
const RECIPIENT_EMAIL = defineSecret("RECIPIENT_EMAIL");

// Function to handle email sending
const handleEmail = async (req, res) => {
  corsHandler(req, res, async () => {
    // Create transporter inside function (to access secrets at runtime)
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_AUTH.value(), // Access at runtime
        pass: EMAIL_PASSWORD.value(), // Access at runtime
      },
    });

    const mailOptions = {
      from: EMAIL_AUTH.value(),
      to: RECIPIENT_EMAIL.value(),
      subject: req.query.subject,
      text: `
        Name: ${req.query.name}
        Email: ${req.query.email}
        Company: ${req.query.company || "N/A"}
        Message: ${req.query.message}
      `,
      html: `
        <h2>${req.query.subject}</h2>
        <p><strong>Name:</strong> ${req.query.name}</p>
        <p><strong>Email:</strong> ${req.query.email}</p>
        <p><strong>Company:</strong> ${req.query.company || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${req.query.message}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.messageId);
      res.status(200).send({status: "Email sent successfully!"});
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({status: "Failed to send email.", error});
    }
  });
};

// Export function with secret dependencies
module.exports = https.onRequest(
    {secrets: [EMAIL_AUTH, EMAIL_PASSWORD, RECIPIENT_EMAIL]},
    handleEmail);
