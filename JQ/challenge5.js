$(document).ready(function(){
	var imgs=$("img");
	var msg = "Hover over an image below.";
	for(let i=0;i<imgs.length;i++){
		$("img").eq(i).mouseover(function(){
			console.log("url("+imgs[i].src+")");
			console.log($("img").eq(i).attr("alt"));
			$("#image").css("background-image","url("+imgs[i].src+")");
			$("div").html($("img").eq(i).attr("alt"));
			});

		$("img").eq(i).focus(function(){
			console.log("url("+imgs[i].src+")");
			console.log($("img").eq(i).attr("alt"));
			$("#image").css("background-image","url("+imgs[i].src+")");
			$("div").html($("img").eq(i).attr("alt"));
		});

		$("img").eq(i).mouseleave(function(){
			$("#image").css("background-image","url('')");
			$("div").html(msg);	
		});

		$("img").eq(i).blur(function(){
			$("#image").css("background-image","url('')");
			$("div").html(msg);	
		});

	}
});