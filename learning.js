$(document).ready(function(){
	$("#header").mouseenter(function(){
		$("#footer").fadeOut();
	});
	$("#header").mouseleave(function(){
		$("#footer").fadeIn();
	});

	$('#combine').click(function(){

		var failed = false;  //later added veriable
		var combined_text = '';

		$('input[type="text"]').each(function(){
			if ($(this).val() == '') {

				failed = true;

			}
			if (failed == true) {

				alert("Please fillout All the field!");

			} else {
				combined_text += $(this).val() + ' ';
			}

		});

		$('.text_parse p').text(combined_text);
	});
});



