/**
 * The MIT License (MIT)
 * Copyright (c) 2016 Andrew J. Thom
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of 
 * this software and associated documentation files (the "Software"), to deal in the 
 * Software without restriction, including without limitation the rights to use, copy, 
 * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
 * and to permit persons to whom the Software is furnished to do so, subject to the 
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies 
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var previouslyAskedQuestions = [];

var setUp = function() {
	$('#askThe8Ball')[0].play();
	
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
