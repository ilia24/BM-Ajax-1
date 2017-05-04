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
    console.log('ajax query succedeed');
    $('#step3456').append(rdata);
  }).fail(function() {
    console.log('ajax query failed')
    $('#step3456').append('Ajax query failed send help!');
  });
});

$('#pong').on('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/pong/',
    method: 'GET',
    // data: {},
    dataType: 'html'
  }).done(function (rdata) {
    console.log('ajax query succedeed');
    $('#step3456').append(rdata);
  }).fail(function() {
    console.log('ajax query failed')
    $('#step3456').append('Ajax query failed send help!');
  });
});

});
