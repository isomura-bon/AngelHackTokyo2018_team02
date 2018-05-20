const express = require('express');
const router = express.Router();
var UserInfo = require('../models/user');

/* POST users listing. */
/* コマンドから入力する用のメソッド */
router.post('/regist', function(request, response) {
    console.log("catch the new regist request");

    console.log(request.body);

    var username = request.body.username;
    var firstname = request.body.firstname;
    var userid   = request.body.userid;
    var gcm	 = request.body.gcm;
    var status	 = request.body.status;
    var disease	 = request.body.disease;
    var jobIndustry = request.body.jobIndustry;
    
    UserInfo.find({ "userid" : userid }, function(err, result){
	if (err)	      
	    console.log(err); 

	// 新規登録
	if (result.length == 0){
	    var user = new UserInfo();

	    user.username = username;
	    user.firstname = firstname;
	    user.userid   = userid;
	    user.gcm      = gcm;
	    user.status   = status;
	    user.disease  = disease;
	    user.jobIndustry = jobIndustry;

	    user.save(function(err){
		if (err) console.log(err);
	    });
	};
	response.json({'status':1});
    });
});

router.get('/profile', function(request, response){

    const userid = request.query.userid;
    const gcm    = request.query.gcm;

    UserInfo.find({ "userid" : userid }, function(err, result){
	if (err)	      
	    console.log(err); 

	if (result.length != 1){
	    response.json({'status':2});
	}
	else{
	    UserInfo.update( 
		{ 'usesrid' : result[0].userid }, 
		{ $set: { 'gcm' : gcm  }
		}, function(err, result){
		    if (err)
			console.log(err);
		});

	    response.render('profile', {
		'username' : result[0].username,
		'firstname' : result[0].firstname,
		'disease'  : result[0].disease,
		'jobIndustry' : result[0].jobIndustry
	    });
	    //    response.json({
	    // 'username' : result[0].username,
		// 'userid'   : result[0].userid,
		// 'gcm'      : gcm,
		// 'status'   : result[0].status,		
		// 'disease'  : result[0].disease,
		// 'jobIndustry' : result[0].jobIndustry
	 //    });
	}
	
    });

});

router.get('/getMentorList', function(request, response){

    const userid = request.query.userid;
    const gcm    = request.query.gcm;

    const query = {  "userid" : { '$ne' : userid } };

    UserInfo.find( query, function(err, result){
	if (err)	      
	    console.log(err); 

	if (result.length == 0){
	    response.json({'status':2});
	}
	else{
	    let mentorList = {
		'mentorList' : result
	    };
	    response.json(mentorList);
	}
    });
});

module.exports = router;
