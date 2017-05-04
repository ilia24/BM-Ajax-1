$(function() {


$('#ajaxbutton').on('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    // data: {},
    dataType: 'html'
  });
});


$('#ping').on('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping/',
    method: 'GET',
    // data: {},
    dataType: 'html'
  }).done(function (rdata) {
    console.log(rdata);
    $('#step3456').append(rdata);
  });
});

});
