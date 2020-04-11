const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const welcomeMail = (email,name)=>{
    sgMail.send({
        to : email ,
        from : 'rootrsk@gmail.com',
        subject : 'Welcome to test app',
        text : `Welcome ${name} to test app you have just signed up .A confirmation mail will be send to this mail don't forgot to verify.`
    })
}
module.exports = {
    welcomeMail,
}