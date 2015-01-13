var request = require('request');

var mimail = {
	send: {
		url: 'https://mitac-qt500-v2014082704.appspot.com/_ah/api/mimail/v1/campaigns',
		method: 'POST'
	}
}

var auth = {};

exports.init = function(username, password, campaignid) {
	auth.key = username;
	auth.token = password;
	auth.campaignid = campaignid;
}

/**
 * @params opt {json} ex: { from: 'no-reply@micloud.tw',
 *   fromname: 'NO-REPLY',
 *   to: [ 'simonsu@mitac.com.tw' ],
 *   subject: 'test123...Mon Jan 12 2015 21:00:40 GMT+0800 (CST)',
 *   html: '<h1>TEST123</h1>',
 *   cc: [ 'simon.su@gs.arecord.us' ],
 *   bcc: [ 'simonsu@mitac.com.tw' ] }
 * @params callback {function} 
 *
 */
exports.sendmail = function(opt, callback) {
	var opts = {
		url: mimail.send.url,
		method: mimail.send.method ,
		qs: {}
	};
	opts.qs[auth.key] = auth.token;
	opts.json = {
		subject: opt['subject'],
		to: opt.to,
		html: opt.html,
		campaign_id: auth.campaignid,
    send_now: true
	}
	if(opt.cc) opts.json.cc = opt.cc;
	if(opt.bcc) opts.json.bcc = opt.bcc;

  console.log('mimail send mail body: ', opts);

	request(opts, function(e,r,d){
		callback(e, d);
	});
}
