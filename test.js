var nu = require('nodeutil');

var mailer = require('nodeutil').mailutil;
var ip = 'localhost';

mailer.init(
      {"smtpOptions":{"host":ip, "port": 3000}, "sender": "NO-REPLY <no-reply@micloud.tw>"}
    );

mailer.sendNodeMail({
		from: "NO-REPLY <no-reply@micloud.tw>",
    cc:["simon.su@gs.arecord.us"],
    subject: "test123..." + new Date().toString(),
    html:"<h1>TEST123</h1>",
    bcc:["simonsu.mail@gmail.com","simonsu.mail+cc@gmail.com"],
    to:["simonsu@mitac.com.tw"] /*,
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

