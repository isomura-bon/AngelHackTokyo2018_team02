$(window).load(function(){

    let talker = $('#userName').text();
    talker = talker.slice(0,2);

    var hostUrl = 'http://localhost:3000/users/getMentorList?userid=1';
    $.ajax({
	type:          'get',
	dataType:      'json',
	contentType:   'application/json',
	scriptCharset: 'utf-8',
        async:          true,
        url:            hostUrl,
        success: function(result){

	    for (var i = 0; i < result.mentorList.length; i++){
		var username    = result.mentorList[i].username;
		var firstname   = result.mentorList[i].firstname;
		var gcm		= result.mentorList[i].gcm;
		var disease	= result.mentorList[i].disease;
		var jobIndustry = result.mentorList[i].jobIndustry;
		var status      = result.mentorList[i].status;

		if (status == true) {
		    $('.recommendContainer').prepend(
			'<div class="recommendCard">' +
			    '<span data-name="userAvatar"><i class="fas fa-user-circle"></i></span>' +
			    '<div>' +
			    '<p data-name="userName">'+ username + firstname +'</p>'+
			    '<p class="subText">'+ disease +'</p>' +
			    '<p class="subText">'+ jobIndustry +'</p>' +
			    '</div>' +
			    '<a class="faOverlap" href="http://localhost:3000/request?talker='+talker+'&listener='+username+'&gcm='+gcm+'" data-name="cardCheckBtn">' +
			    '<i class="fas fa-check"></i>' +
			    '<i class="fas fa-comment"></i>' +
			    '</a>' +
			    '</div>' 
		    );  
		}
		else{
		    $('.recommendContainer').prepend(
			'<div class="recommendCard">' +
			    '<span data-name="userAvatar"><i class="fas fa-user-circle"></i></span>' +
			    '<div>' +
			    '<p data-name="userName">'+ username + firstname +'</p>'+
			    '<p class="subText">'+ disease +'</p>' +
			    '<p class="subText">'+ jobIndustry +'</p>' +
			    '</div>' +
			    '<a class="faOverlap" href="http://localhost:3000/request?talker='+talker+'&listener='+username+'&gcm='+gcm+'" data-name="cardCheckBtn">' +
			    '<i class="fas fa-times"></i>' +
			    '<i class="fas fa-comment unavailable"></i>' +
			    '</a>' +
			    '</div>' 
		    );  		    
		}
	    }
	}
    });
});


