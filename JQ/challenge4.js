$("#ch4form").submit(function(){
	var validInput=true;
	 // console.log($('input[name="fullname"]').val());
	 // console.log($('input[name="streetaddr"]').val());
	 // console.log(!$('input[name="fullname"]').val());
  //    console.log(!$('input[name="streetaddr"]').val());
	if(!$('input[name="fullname"]').val()){
		$("#nameerrormsg").css("display","block");
		validInput=false;
	}else{
		$("#nameerrormsg").css("display","none");
		// validInput=true;
	}

	if(!$('input[name="streetaddr"]').val()){
		$("#addrerrormsg").css("display","block");
		validInput=false;
	}else{
		$("#addrerrormsg").css("display","none");
		// validInput=true;
	}

	return validInput;
});