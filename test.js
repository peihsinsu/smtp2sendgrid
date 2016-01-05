var nu = require('nodeutil');

var ip = 'localhost';
//var mailer = require('nodeutil').mailutil;
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({"host":ip, "port": 25});
/*
mailer.init(
      {"smtpOptions":{"host":ip, "port": 2525}, "sender": "NO-REPLY <no-reply@micloud.tw>"}
    );
*/

console.log(transporter);
transporter.sendMail({
		//from: "NO-REPLY <no-reply@micloud.tw>",
		from: "micloud <developer@example.tw>",
    //cc:["simon.su@gs.arecord.us"],
   // cc:["rock9030@gmail.com","cage+01@mitac.com.tw","simonsu@mitac.com.tw","sunnyhu@mitac.com.tw"],
    subject: "micampus-test123..." + new Date().toString(),
    html:"<h1>TEST123</h1>",
    //bcc:["simonsu.mail@gmail.com","simonsu.mail+cc@gmail.com"],
    //to:["cage+01@mitac.com.tw"] ,
    to:["chengwei@mitac.com.tw"] ,
    attachments: [//see detail: https://github.com/andris9/Nodemailer#attachment-fields
       {   // utf-8 string as an attachment
            fileName: "text1.txt",
            contents: "hello world!"
        },
        {   // binary buffer as an attachment
            fileName: "text2.txt",
            contents: new Buffer("hello world!","utf-8")
        }] 
});

