(function($) {
	$.fn.state = function(stateName, message, stateInitial) {
		if (typeof stateName === 'undefined') {
			var dataState = this.data('state');
			if (typeof dataState === 'undefined')
				return 'none'
			else
				return this.data('state');
		}
		else if (stateName === false) {
			this.data('state', 'none')
				.css('position', this.data('origPosition'))
				.find('.stateoverlay')
				.fadeOut(200);
// FANCY FADE: animate({left:300, opacity:'hide'}, 350)
			var overlay = this.find('.stateoverlay');
			if (overlay.css('display') !== 'none')
				overlay.css('display', 'none');
			return this;
		}
		else {
			var eOverlay = this.find('.stateoverlay').attr('class', 'stateoverlay').empty();
			if (eOverlay.length < 1)
				var eOverlay = $('<div class="stateoverlay"></div>').appendTo(this);
			this.data('origPosition', this.css('position'));
			if (this.data('origPosition') === 'static')
				this.css('position', 'relative');

			this.data('state', stateName);
			if (stateInitial === true)
				stateName += ' initial';
			if (typeof message === 'undefined')
				eOverlay.addClass(stateName);
			else {
				eOverlay
					.append('<div class="primary">'+ message +'</div>')
					.addClass(stateName);
			}
			if (stateInitial !== true)
				eOverlay.fadeIn(200);
			return this;
		}
	};
})(jQuery);