const nodemailer = require('nodemailer');

const sendEmail = async (user) => {
    // Create a transporter
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
    // Define the email options
    let info = {
        from: `"R-Stadium👻" <${process.env.EMAIL}>`,
        to: user.email,
        subject: subject,
        html: `
                <h1>Verify your account</h1>
                <p>Hello,</p>
                <p>Thank you for registering with our website. To complete your registration, please click the link below to verify your email address:</p>
                <p><a href=${process.env.HOST+':'+process.env.PORT}>Verify my account</a></p>
                <p>If you did not register with our website, please ignore this email.</p>
                <p>Thank you,</p>
                <p>The Example Team</p>
            `
    };

    transporter.sendMail(info);

    // Actually send the email
    await transporter.sendMail(info, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent');
        }
    });

};

module.exports = sendEmail;