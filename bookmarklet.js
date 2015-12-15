$("#message-input").keydown(function(event) {
  if(event.keyCode == 9) {
    var message = $(this).val();
    for(var macroName in macros) {
      var macro = macros[macroName];
      message = message.replace(macro.pattern, function() {
        var matches = Array.prototype.slice.call(arguments, 1);
        return macro.macro.apply(window, matches);
      });
    }
    $(this).val(message);
  }
});

var macros = {
  frogonacci: {
    pattern: /\/frogonacci (\d+)/g,
    macro: function(qty) {
      return frogonacci(parseInt(qty));
    }
  }
}

function frogonacci(qty) {
  // an array of every frog
  var frogArray = [
      'rainbowfrog',
      'rainbowfrog2',
      'rainbowfrog3',
      'rainbowfrogflip',
      'rainbowfroglsd',
      'rainbowfrogmellow',
      'rainbowfrogweyes',
      'reverserainbowfrog',
      'turbofrog',
      'turboflipfrog',
      'upsidedownrainbowfrog'
  ];
  
  function fibonacciFrog(qty) {
    var frogs = [];
  
    // Push sequence into an array
    for(var i = 1; i <= qty; i++) {
      frogs.push(fibonacci(i));
    }
  
    // Frogify the array and print it out
    return frogify(frogs);
  }
  
  // Convert each fibonacci number to
  function frogify(numArray) {
    return numArray.map(function(currentNum) {
      var currentLine = '';
  
      for(var i = 0; i < currentNum; i++) {
        currentLine += ':' + randomFrog() + ': ';
      }
      return currentLine;
    }).join(' ');
  }
  
  // Basic recursive fibonacci function
  function fibonacci(n) {
      if (n <= 2) {
          return 1;
      }
  
      else {
        return fibonacci(n-1) + fibonacci(n-2);
      }
  }

  // Get random frog from array
  function randomFrog() {
      return frogArray[Math.floor((Math.random() * frogArray.length))];
  }
  
  return fibonacciFrog(qty);
}
