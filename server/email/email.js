const Sendmail = require('sendmail')();
const ejs = require('ejs');

const sendEmal = (host, filename, type, subject, user) => {
    ejs.renderFile(`server/views/${filename}.ejs`, {
        logo: host,
        name: user.name,
        emailLink: `//${host}/${type}/${user._id}`        
    }, {}, (err, html) => {
        if (err) {
            console.log(err);
            return;
        }
        Sendmail({
            from: 'no-reply@nirmalrohit.com',
            to: user.email,
            subject: subject,
            html: html,
          }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });             
    });

}


module.exports = { sendEmal }