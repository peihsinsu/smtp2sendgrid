var nu = require('nodeutil');

var mailer = require('nodeutil').mailutil;
var ip = 'localhost';

mailer.init(
      {"smtpOptions":{"host":ip, "port": 3000}, "sender": "NO-REPLY <no-reply@micloud.tw>"}
    );

/*
mailer.sendNodeMailAsync('simonsu.mail@gmail.com',
  'test mail send...',
  'send mail OK!',
  true,
  function(){
    console.log('Send mail done...');
  }
);
*/

mailer.sendNodeMail({
		from: "NO-REPLY <no-reply@micloud.tw>",
    to:["simonsu.mail@gmail.com"],
    subject: "test123..." + new Date().toString(),
    html:"<h1>TEST123</h1>",
    cc:["simonsu.mail+cc@gmail.com"],
    bcc:["simonsu@mitac.com.tw"] /*,
    attachments: [//see detail: https://github.com/andris9/Nodemailer#attachment-fields
       {   // utf-8 string as an attachment
            fileName: "text1.txt",
            contents: "hello world!"
        },
        {   // binary buffer as an attachment
            fileName: "text2.txt",
            contents: new Buffer("hello world!","utf-8")
        }] */
  },
  true, function(res){
    console.log(res);
  }
);

