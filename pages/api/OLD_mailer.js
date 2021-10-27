var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport'); // this is important

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'register.it',
  host: 'authsmtp.securemail.pro',
  auth: {
    user: 'fgreco@craon.it',
    pass: 'Cinisello04'
  }
}));
const send = ({ email, nome, cognome, azienda, oggetto, messaggio }) => {
  const from = nome && email ? `${nome} <${email}>` : `${nome || email}`
  const message = {
    from,
    to: 'info@craon.it',
    subject: `Nuovo ${oggetto}`,
    html:` <p> Nuovo messaggio da </p> <br> <strong> ${nome + ' ' + cognome} </strong> 
    <br>
    <p> Azienda: <strong> ${azienda} </strong> </p> 
    <br>
    <br>
    <p>MESSAGGIO: </p> <br>
    <p> ${messaggio} </p> `,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send