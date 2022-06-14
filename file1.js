var printText = $('.text').data('text');

var contentArray = printText.split('/n');
$.each(contentArray, function(index, newLine) {
  $('.text').append('<span style="display:block;" id="'+index+'"></span>');
  
  var lineID = index;
  var self = $(this);
    setTimeout(function () {
      $.each(self, function(index, chunk){
          setTimeout(function () {
            $('#'+lineID).append("<span>"+chunk+"</span>");
            $('body, html').scrollTop($(document).height());
          }, index*5);
      });
      
     //let's change some stuff
     var myVar = "this is new";
      
    }, index*100);
});
