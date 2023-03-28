import nodemailer from 'nodemailer'

// async..await is not allowed in global scope, must use a wrapper
async function createMailTransporter (user) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL, //  gmail user
        pass: process.env.EMAIL_PASS, // gmail password API
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Minga" <mingamindhub@gmail.com>',
        to: user.mail,
        subject:"Verify your email...",
        html: `<p>Hello 👋 ${user.name}, verify your email by clicking this link...</p>
        <a href ='${process.env.CLIENT_URL}/verify/${user.verify_code}'>Verify Your Email</a>`
    });
  
}
  

export default createMailTransporter