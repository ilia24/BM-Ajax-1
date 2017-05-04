$(function() {


$('#ajaxbutton').on('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    // data: {},
    // dataType: _____
  });
})

});
