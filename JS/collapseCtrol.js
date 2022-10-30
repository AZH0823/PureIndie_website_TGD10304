	let animatiomSpeed = 1200
$(function () {



	$(".title.slideToggle").click(function (e) {
		e.preventDefault();
        console.log(e)
		//在 h2 上動態新增 class
		//h2 在父層元素中，找到 p 元素，並且給它滑動效果
		$(this).toggleClass("active");

        // console.log($(this).parent().find("ol>li"))
		$(this).parent().find(".slideToggleContainer").slideToggle(animatiomSpeed);
        // $(this).parent().siblings().find("h2").removeClass("active");
	});
	$(".band-detail-bandToplists .slideToggle").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().find(".band-song-toplists").slideToggle(animatiomSpeed);
	});

	$(".band-detail-Intro .slideToggle").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().find(".band-detail-txt").slideToggle(animatiomSpeed);
	});

		$(".band-detail-activies .slideToggle").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().find(".nesws-actives-List").slideToggle(animatiomSpeed);
	});
	$(".band-detail-album .slideToggle").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().find(".band-album-lists").slideToggle(animatiomSpeed);
	});

	// collect page
	// 樂團收藏
	$(".collect-band .slideToggle").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().find(".collect-band-lists").slideToggle(animatiomSpeed);
	});
	// 歌曲收藏
	$(".collect-band-songs .slideToggle").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().find(".collect-songs-lists").slideToggle(animatiomSpeed);
	});
	// 新聞活動收藏
	$(".collect-band-newsandActivies .slideToggle").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().find(".nesws-actives-Lists").slideToggle(animatiomSpeed);
	});
});


