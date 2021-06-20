var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var message = document.querySelector('#message');

var grammar = '#JSGF V1.0;';

var recognition = new SpeechRecognition();
var recognitionList = new SpeechGrammarList();
recognitionList.addFromString(grammar,1);

recognition.grammars = recognitionList;
// recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onresult = function(event) {
    var last = event.results.length-1;
    console.log(event);
    var command = event.results[last][0].transcript;
    message.textContent = "voice input " + command;
    console.log(command);
   if(command.toLowerCase() === "select laxmi" ) {
       document.querySelector('#chklaxmi').checked = true;
   }
   if(command.toLowerCase() === "select deepa" ) {
    document.querySelector('#chkdeepa').checked = true;
}
if(command.toLowerCase() === "select suman" ) {
    document.querySelector('#chkjaya').checked = true;
}
}

document.querySelector('.btn-click').addEventListener('click', function(){
    recognition.start();
});

recognition.onspeechend = function() {
    recognition.stop();
  }
  recognition.onerror = function(event) {
    recognition.textContent = 'Error occurred in recognition: ' + event.error;
  }
  console.log(document.querySelector("#chklaxmi"))