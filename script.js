jQuery(function($) {
	$('#output').keypress(function() {
		return false;
	});
	$('#output').keydown(function(event) {
		if (event.which >= 33 && event.which <= 40 || event.which == 116 || event.which == 17 || event.which == 65 || event.which == 67) {
			return true;
		}
		return false;
	});
	
	$('#send').click(function() {
		var input = $('#input').val();
		
		var array = input.split(/(\s+|\-|\,|\.|\ |\«|\»|\'|\")/);
		var curr_pos = 0;
		
		do {
			var word = array[curr_pos];
			if (word.search(/[а-яА-Яa-zA-Z]+/) == -1) {
				curr_pos++;
				continue;
			}
			
			var word_a = word.split('');
			for (var i = 1; i < word.length-3; i++) {
				var j, k = 0, rnd = Math.floor(Math.random() * 3);
				if (rnd == 0 || rnd == 1) {
					j = rnd + 1;
				} else {
					k = 1;
					j = 2;
				}
				var tmp = word_a[i + k];
				word_a[i + k] = word_a[i + j];
				word_a[i + j] = tmp;
			}
			array.splice(curr_pos, 1, word_a.join(''));
			curr_pos++;
		} while (curr_pos < array.length);
		
		$('#output').val( array.join('') );
	});
});
