var previouslyAskedQuestions = [];

var setUp = function() {
	var drawPreviousDiv = function() {
		if (previouslyAskedQuestions.length == 0) {
			$('#previousDiv').text('');
		}
		else {
			$('#previousDiv').text('');
			$('#previousDiv').append('<h3 class="page-header">Questions You Have Asked</h3>');
			for (var i = previouslyAskedQuestions.length - 1; i >= 0; i--) {
				$('#previousDiv').append('<div>' + previouslyAskedQuestions[i] + '</div>');
			}
		}
	}
	
	var addToList = function(question) {
		previouslyAskedQuestions.push(question);
		drawPreviousDiv();
	};
	
	$('#askBox').keypress(function (e) {
		var key = e.which;
		if(key == 13) { // the enter key code
			if ($('#askBox').val().length === 0) {
				return;
			}
			$('#audio1')[0].play();
			var question = $('#askBox').val();
			addToList(question);
			$('#askBox').val(''); 
		}
	});   
	
	$('#askButton').click(function() {
		if ($('#askBox').val().length === 0) {
			return;
		}
		$('#audio1')[0].play();
		var question = $('#askBox').val();
		addToList(question);
		$('#askBox').val('');
	});
}
