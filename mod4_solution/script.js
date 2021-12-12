(function() {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var firstletter;

  for (var i = 0; i < names.length; i++) {
    
    firstletter = names[i].charAt(0)

    if (firstletter.toLowerCase() == 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }

  } 
})();