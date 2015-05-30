$(document).ready(function () {
    $("#toggle").click(function () {
        $("img").slideToggle();
		var tempText = $("#toggle").text();
		$("#toggle").text(toggleText);
		toggleText = tempText;
    });
	$("img").hover(bigger, smaller );
});

var bigger = function(){
	$(this).css({height: '200', width: '200'});
};

var smaller = function(){
	$(this).css({height: '150', width: '150'});
};

var toggleText = "Show Images";