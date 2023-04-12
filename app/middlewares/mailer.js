const nodemailer = require('nodemailer');

const sendEmail = async (method, user, token) => {
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
    let subject = ''
    let html = ''
    let url = process.env.HOST + ':' + process.env.PORT + '/auth/verification-email/' + token
    if (method == 'register') {
        subject = 'Verify your account'
        html = `
                <h1>Verify your account</h1>
                <p>Hello,</p>
                <p>Thank you for registering with our website. To complete your registration, please click the link below to verify your email address:</p>
                <p><a href=${url}>Verify my account</a></p>
                <p>If you did not register with our website, please ignore this email.</p>
                <p>Thank you,</p>
            `
    }
    // Define the email options
    let info = {
        from: `"R-Stadium👻" <${process.env.EMAIL}>`,
        to: user.email,
        subject,
        html
    };

    // Actually send the email
    transporter.sendMail(info, function (error, info) {
        if (error) {
            console.log(error);
        }
    });
};

module.exports = sendEmail;