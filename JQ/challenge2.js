$("#useBilling").change(function(){

		if($("#useBilling").prop("checked")){
			var value=$("#billing").val();
			$("#home").val(value);
			$("#home").prop("disabled",true);
		}else{
			$("#home").val('');
			$("#home").prop("disabled",false);
		}
});




