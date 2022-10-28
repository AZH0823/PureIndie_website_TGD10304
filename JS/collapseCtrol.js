$(function () {
	$(".title.slideToggle").click(function (e) {
		e.preventDefault();
        console.log(e)
		//在 h2 上動態新增 class
		//h2 在父層元素中，找到 p 元素，並且給它滑動效果
		$(this).toggleClass("active");

        // console.log($(this).parent().find("ol>li"))
		$(this).parent().find(".slideToggleContainer").slideToggle(800);
        // $(this).parent().siblings().find("h2").removeClass("active");
	});
});