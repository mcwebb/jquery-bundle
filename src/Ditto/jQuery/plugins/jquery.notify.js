var notify = {
	success: function(message) {
		$('<div class="alert alert-block alert-notify alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button><h4>Success!</h4>'+ message +'</div>')
			.appendTo('body')
			.slideDown(200)
			.delay(2500)
			.slideUp(function(){
				$(this).remove();
			});
	},

	error: function(message) {
		$('<div class="alert alert-block alert-notify alert-error"><button type="button" class="close" data-dismiss="alert">&times;</button><h4>Error!</h4>'+ message +'</div>')
			.appendTo('body')
			.slideDown(200)
			.delay(2500)
			.slideUp(function(){
				$(this).remove();
			});
	}
}