var SlackMacro = function(pattern, macro) {
  $("#message-input").keydown(function(event) {
    if(event.keyCode !== 9) return;

    $(this).val(function(index, message) {
      return message.replace(pattern, function() {
        var matches = Array.prototype.slice.call(arguments, 1);
        return macro.apply(window, matches);
      });
    });
  });
};

new SlackMacro(/\/frogonacci (\d+)/g, function(lines) {
  return frogonacci(parseInt(lines));

  function frogonacci(lines) {
    var frogs = [
      ':rainbowfrog:',
      ':rainbowfrog2:',
      ':rainbowfrog3:',
      ':rainbowfrogflip:',
      ':rainbowfroglsd:',
      ':rainbowfrogmellow:',
      ':rainbowfrogweyes:',
      ':reverserainbowfrog:',
      ':turbofrog:',
      ':turboflipfrog:',
      ':upsidedownrainbowfrog:',
    ];

    frogs.random = function() {
      var randomIndex = Math.floor(Math.random() * this.length);
      return this[randomIndex];
    };

    return new Array(lines).fill(0).map(function(_, index) {
      var count = fibonacci(index + 1);
      return randomFrogs(count);
    }).join("\n");

    function fibonacci(n) {
      return n <= 2 ? 1 : fibonacci(n-1) + fibonacci(n-2);
    }

    function randomFrogs(count) {
      return new Array(count).fill(0).map(function() {
        return frogs.random();
      }).join(' ');
    }
  }
});

