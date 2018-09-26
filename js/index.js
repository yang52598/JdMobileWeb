window.addEventListener('load', function () {


	
var jd=new JD();
	window.addEventListener('scroll', jd.scroll);
	jd.scroll();
	jd.seckill();
	jd.slide();

});
function JD(){};
JD.prototype = {
	scroll: function () {
		var header = document.querySelector('#header');
		var scrollTop = document.documentElement.scrollTop;
		var slideHeight = document.querySelector('#slide').offsetHeight;
		console.log(slideHeight);
		

		var opacity = scrollTop / slideHeight;

		if (opacity > 1) {
			header.style.backgroundColor = "rgba(222, 24, 27, 1)";

		} else {
			header.style.backgroundColor = 'rgba(222,24,27,' + opacity + ')';
		}

	},
	seckill: function () {
		// 获取的是1970.1.1 0:00:00到今天(20180922)21点的毫秒数,除以1000转成秒数
		var futureTime = new Date(2018, 8, 22, 23, 00, 00).getTime() / 1000;
		//获取的是当前电脑的时间毫秒数,转成秒数
		var nowTime = Math.floor(new Date().getTime() / 1000)

		// 获取当前时间秒数
		var time = futureTime - nowTime;

		//获取所有span
		var spanList = document.querySelectorAll('#seckill span');
		kuai();
		function kuai() {
			time--;
			if (time <= 0) {
				time = 7200;
			}

			// 时
			// 1小时是3600秒,假设time是3700秒,那么小时向下取整就是1
			var hour = Math.floor(time / 3600);
			// 分
			//1小时是3600秒,假设time是3700秒,那么time模以3600就是100
			// 100再除以60就是1.6,分钟数向下取整就是1
			var minute = Math.floor(time % 3600 / 60);
			//秒
			var second = Math.floor(time % 60);


			spanList[0].innerHTML = Math.floor(hour / 10);
			spanList[1].innerHTML = Math.floor(hour % 10);
			spanList[3].innerHTML = Math.floor(minute / 10);
			spanList[4].innerHTML = Math.floor(minute % 10);
			spanList[6].innerHTML = Math.floor(second / 10);
			spanList[7].innerHTML = Math.floor(second % 10);

		}
		setInterval(kuai, 1000);
	},

	slide:function(){
		var mySwiper = new Swiper('#slide .swiper-container', {
			direction: 'horizontal', // 垂直切换选项
			loop: true, // 循环模式选项
	
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
			},
	
			autoplay: {
				delay: 3000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
			},
	
	
		});
	},
}