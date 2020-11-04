// JavaScript Document
$(document).ready(function() {
	$("div.thumb img").click(function() {
		$("#mainImg").attr("src", $(this).attr("src"));
	});
	
	$(".buttons img").click(function() {
		var c = $(this).attr("data");
		$("#mainImg").attr("src", `images/HarryPotter/${c}_1.jpg`);
		var images = $(".thumb img")
		for (var i = 0; i < images.length; i++)
			$(images[i]).attr("src", `images/HarryPotter/${c}_${i+1}.jpg`)
	})
	
	$(".tab-content div:not(#mobile)").hide()
	
	$(".tab li a").click(function() {
		event.preventDefault();
		
		$(".tab li a").removeClass('active');
		$(this).addClass('active');
		
		var h = $(this).attr("href")
		
		$(".tab-content div").hide()
		$(h).show();
	});
});
