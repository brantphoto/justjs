(function() {
  'use strict';

  var self = this;
  self.brant = brant();
  self.brant.init();

  function brant() {
    var textTagElement;
    var timerInterval;
    var timer = {
      start: function(element) {
        var blurLevel = 0;
        var timer = setInterval(function(){
          blurLevel++;
          blurText(element, blurLevel);
          addNewText(element);
        }, 3000);

        element.style.color = 'blue';

        function blurText(el, blur) {
          el.style.webkitFilter = 'blur(' + parseInt(blur) + 'px)';
        }

        function addNewText(el) {
          var node = document.createTextNode("Can you read this? ");
          el.appendChild(node);
        }
        return timer;
      },
      stop: function(intervalToStop) {
        clearInterval(intervalToStop);
      }
    };

    return {
      init: init,
      timer: timer,
      timerInterval: timerInterval,
      textTagElement: textTagElement
    }

    function init() {
      var self = this;
      var element = self.textTagElement = document.getElementById("root");
      self.timerInterval = self.timer.start(element);
      element.onclick = function(event) {
        self.timer.stop(self.timerInterval);
      };
    }

  };

}).call(this);
