require('dotenv').config();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const path = require('path');
var transporter = nodemailer.createTransport(
  smtpTransport({
    service: process.env.MAIL_SERVICE,
    host: process.env.SMTP_HOST,
    secure: true,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.CLIENT_EMAIL,
      pass: process.env.CLIENT_EMAIL_SECRET_KEY,
    },
  })
);

const logoPath = path.join(process.cwd(), 'public/assets/images/logo.png');

exports.sendEnquiryReceivedEmail = async ({ user, email }) => {
  var mailOptions = {
    from: process.env.CLIENT_EMAIL,
    to: email,
    subject: `Enquiry Received from ${user.name}`,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Enquiry Received</title>
        <style>
            body {
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 40px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                padding: 20px 0;
                background-color: #e3382f;
                color: #ffffff;
                border-radius: 10px 10px 0 0;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px;
                color: #333333;
            }
            .content p {
                margin: 15px 0;
                line-height: 1.6;
            }
            img {
              height: 50px;
              width: 120px;
            }
            .footer {
                text-align: center;
                padding: 20px 0;
                color: #666666;
                font-size: 14px;
                border-top: 1px solid #dddddd;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="cid:logo.png" alt="Logo">
                <h1>Enquiry Received</h1>
            </div>
            <div class="content">
                <p>Hi Andrea,</p>
                <p>We have received an enquiry from ${
                  user.name
                }. Here are the details of the enquiry:</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${user.email}">${
      user.email
    }</a></p>
                <p><strong>Mobile:</strong> ${user.phone}</p>
                <p><strong>Enquiry Details:</strong></p>
                <p>${user.meeting_agenda}</p>
                <p>If you need to contact the client, you can reach out to them at the email or mobile number provided above.</p>
            </div>
            <div class="footer">
                <p>We look forward to assisting you with this enquiry.</p>
                <p>&copy; ${new Date().getFullYear()} Event Planning Co. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: logoPath,
        cid: 'logo.png',
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

exports.sendThankYouEmail = async (email) => {
  var mailOptions = {
    from: process.env.CLIENT_EMAIL,
    to: email,
    subject: `Thank You for Subscribing!`,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Subscribing</title>
        <style>
            body {
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 40px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                padding: 20px 0;
                background-color: #e3382f;
                color: #ffffff;
                border-radius: 10px 10px 0 0;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px;
                color: #333333;
            }
            .content p {
                margin: 15px 0;
                line-height: 1.6;
            }
            img {
              height: 50px;
              width: 120px;
            }
            .footer {
                text-align: center;
                padding: 20px 0;
                color: #666666;
                font-size: 14px;
                border-top: 1px solid #dddddd;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="cid:logo.png" alt="Logo">
                <h1>Thank You for Subscribing!</h1>
            </div>
            <div class="content">
                <p>Hi,</p>
                <p>Thank you for subscribing to our blog! We're excited to have you on board and look forward to sharing our latest articles, updates, and insights with you.</p>
                <p>You can expect to receive our newsletters straight to your inbox. We hope you enjoy our content and find it valuable.</p>
                <p>If you have any questions, feedback, or topics you'd like us to cover, feel free to reach out to us at <a href="mailto:info@blissbyandrea.com">info@blissbyandrea.com</a>.</p>
            </div>
            <div class="footer">
                <p>Happy reading!</p>
                <p>&copy; ${new Date().getFullYear()} Our Blog. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: logoPath,
        cid: 'logo.png',
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
