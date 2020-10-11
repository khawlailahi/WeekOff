$("#clickMe").click(function(){
	$(".secret").slideUp();
});

$("#create").on("click",function(){
	$("body").append("<p class='.secret'>another hidden spy</p>");
});

$("#delete").on("click",function(){
	$("p").remove();
});
