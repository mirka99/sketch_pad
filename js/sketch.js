$(document).ready(function() {
  var defBlocks = 10;
  var container = 960;

  var defSize = container / defBlocks;

  var blocksPerLine = function() {
    var $defDiv = $('<div class="default"></div>').height(defSize).width(defSize);
    for(i=0; i < defBlocks; i++) {
      $(".container").append('<div class="row"></div>');
      };
      for (j=0; j < defBlocks; j++) {
          $(".row").append($defDiv);
   };
  };

  blocksPerLine();



});
