(function($) {
	$.fn.searches = function(toSearch) {
		if (typeof window.pairings === 'undefined')
			window.pairings = [];
		var	thisPairing = {};
		thisPairing.eSearchBox = this;
		if (typeof toSearch === 'string')
			thisPairing.eToSearch = $(toSearch);
		else thisPairing.eToSearch = toSearch;
		thisPairing.aEs = [];
		thisPairing.eToSearch.each(function(){
			if (typeof $(this).data('searchstring') !== 'undefined')
				thisPairing.aEs.push($(this).data('searchstring'));
			else
				thisPairing.aEs.push($(this).text());
		});

		thisPairing.tSearch;	
		thisPairing.id = window.pairings.push(thisPairing) - 1;
		this.data('pairing_id', thisPairing.id);
		this.keyup(function(){
			var pairing_id = $(this).data('pairing_id');
			clearTimeout(thisPairing.tSearch);
			window.pairings[pairing_id].tSearch = setTimeout(function(){
				var sTerm = window.pairings[pairing_id].eSearchBox.val();
				var rgex = new RegExp(sTerm, 'i');
				if (sTerm.length <= 0)
					window.pairings[pairing_id].eToSearch.slideDown(200);
				else {
					var aMatches = [];
					for (i in window.pairings[pairing_id].aEs) {
						if (window.pairings[pairing_id].aEs[i].search(rgex) != -1)
							aMatches.push(i);
					}
					for (i in window.pairings[pairing_id].eToSearch){
						var e = window.pairings[pairing_id].eToSearch.eq(i);
						if (aMatches.indexOf(i) != -1){
							if (e.css('display') === 'none')
								e.slideDown(100);
						}
						else e.slideUp(100);
					}
				}
			}, 250);
		});

		return this;
	};
})(jQuery);

$(document).ready(function() {
	$('input[data-search]').each(function(){
		$(this).searches($(this).data('search'))
	});
});