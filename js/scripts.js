var sentence = [];
var newSentence = [];

function wordLength(word) {
  return word.length >= 3;
}

$(function() {
  $("form").submit(function(event) {
    sentence = $("input").val().split(/[\s,.!?]+/);
    newSentence = sentence.filter(wordLength).reverse().join(" ");
    $("#story").text(newSentence + ".");
    event.preventDefault();
  });
});
