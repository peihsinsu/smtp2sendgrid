var nu = require('nodeutil');

var mailer = require('nodeutil').mailutil;
var ip = '130.211.244.191';

mailer.init(
      {"smtpOptions":{"host":ip}, "sender": "NO-REPLY <no-reply@micloud.tw>"}
    );

mailer.sendNodeMailAsync('simonsu.mail@gmail.com',
  'test mail send...',
  'send mail OK!',
  true,
  function(){
    console.log('Send mail done...');
  }
);

