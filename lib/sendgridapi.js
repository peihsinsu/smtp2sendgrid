var nu = require('nodeutil')
	, mailutil = nu.mailutil
	, log = nu.simplelog

var api_user = null;
var api_key = null;
var sendgrid  = null;

exports.init = function(user, key) {
	api_user = user;
	api_key = key;
  sendgrid  = require('sendgrid')(api_user, api_key);
}

exports.sendmail = function(opts, cb) {
	log.info('sendmail info:', opts);
	sendgrid.send(opts, cb);
}

/**
 * Send mail using sendgrid
 * @param opts Document with sending info.
 * ex: var mo = {
 *    sender: cfg.email.sender_mail,
 *    sender_name: 'Simon Su',
 *    receivers: ['simonsu.mail@gmail.com', 'simonsu@mitac.com.tw'],
 *    subject: 'test 123',
 *    htmk: 'hello...' 
 *    contentTemplate: __dirname + '/tmpl/' + tmpl,
 *    contentValues: {
 *      link:'http://wwww.google.com',
 *      user: 'Simon Su'
 *    }
 *  }
 * @param cb {function} Callback function with (err, result)
 */
exports.sendTemplateMail = sendTemplateMail;
function sendTemplateMail(opts, cb) {a
	if(!api_user || !api_key || !sendgrid) {
		log.error('sendgrid api init error...');
		return cb({code: 500, msg:'sendgrid api init error'});
	}
	var html = opts.html;
	if(opts && opts.contentTemplate)
  	html = mailutil.convertTemplateMail(opts.contentTemplate, opts.contentValues);

	sendgrid.send({
			from:     opts.sender,
		  fromname: opts.sender_name,
			to:       opts.receivers,
			subject:  opts.subject,
			html:     html
	}, function(err, res){
		if(err) {
			console.log('send mail from sendgrid error:', err);
		}
		cb(err, res);
	});
}
