const nodemailer = require('nodemailer')

const sendmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true,
            auth: {
                user: "support@givetheneedy.org.in",
                pass: "Codetech@123"
            }
        })

        await transporter.sendMail({
            from: "support@givetheneedy.org.in",
            to: email,
            subject: subject,
            text: text,
        })
        console.log("Email sent Successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendmail