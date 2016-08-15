var sentence = [];
var newSentence = [];

$(function() {
  $("form").submit(function(event) {
    sentence = $("input").val().split(/[\s,.!?]+/);
    sentence.forEach(function(word) {
      if(word.length >= 3) {
        newSentence.push(word);
      };
    });
    var reversed = newSentence.reverse().join(" ");
    $("#story").text(reversed + ".");
    event.preventDefault();
  });
});
