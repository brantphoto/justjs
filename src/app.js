(function() {
  'use strict';

  var self = this;
  self.brant = brant();
  self.brant.init();

  function brant() {
    var timer = {
      start: function() {
        var element = document.getElementById("root");
        var blurLevel = 0;
        element.style.color = 'blue';
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
      }
    }

    return {
      init: init,
      timer: timer
    }

    function init() {
      this.timer.start();
    }

  };

}).call(this);
