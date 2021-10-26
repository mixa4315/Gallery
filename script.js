jQuery(document).ready(function($) {
	let child = 0;
	let lorem = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Obcaecati', 'nam', 
					'quisquam', 'iusto', 'odit', 'distinctio', 'quia', 'veritatis', 'modi', 'molestias', 'earum', 'optio']

	for(i = 0; i < 20; i++){
		if(i % 4 == 0){
			$("#images").append(`
				<div class="images-container${++child}"></div>			
			`);
		};
		$(`.images-container${child}`).append(`
			<div class="image" style="background-image: url(images/image_${i+1}.webp)" id="img${i+1}">
				<h5>${lorem[i]}</h5>
			</div>
		`);
	};

	$(".image").click(function(event) {
		curimg =  $(this).prop("id");
		$('body').append(`
			<div class="front-image">
				${setImg(curimg)}
			</div>`
		)
		$(".front-image>div").offset({left: $(".front-image").width()/2 - $(".front-image>div").width()/2 });
	});

	$("html").on('click', '.control-left', function(event) {
		curimg = "img" + (Number(curimg.substr(3)) -1);
		$(".front-image").html(setImg(curimg))
		$(".front-image>div").offset({
			left: $(".front-image").width()/2 - $(".front-image>div").width()/2 
		});
	});

	$("html").on('click', '.control-right', function(event) {
		curimg = "img" + (Number(curimg.substr(3)) +1);
		$(".front-image").html(setImg(curimg))
		$(".front-image>div").offset({
			left: $(".front-image").width()/2 - $(".front-image>div").width()/2 
		});
	});

	$("html").on('click', '.control-close', function(event) {
	 	$('.front-image').remove();
	});

	$(".about-contact textarea").width($(".about-contact input").width()*2 + 40);

	$(".about-button").click(function(event) {
		$(about).toggleClass('about-active');
		$(".about-blur").toggleClass('about-blur-active');
	});

});

function setImg(curimg){
	return `<div style = 'background-image: ${$(`#${curimg}`).prop("style")['backgroundImage']}''>
				<div class="control-close"></div>
				<div class="control-left"></div>
				<div class="control-right"></div>
				<h3>${$(`#${curimg}`).text()}</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum repudiandae aliquid veniam similique voluptatum aut repellat nulla sunt. Error, earum!</p>
			</div>`
}