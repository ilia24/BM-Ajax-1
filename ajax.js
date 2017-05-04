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
    console.log('ajax query succeded');
    $('#step3456').append(rdata);
  }).fail(function() {
    console.log('ajax query failed')
    $('#step3456').append('Ajax query failed send help!');
  }).always(function(){
    console.log('this message always happens with an ajax req!')
  });
});

$('#pong').on('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/pong/',
    method: 'GET',
    // data: {},
    dataType: 'html'
  }).done(function (rdata) {
    console.log('ajax query succeded');
    $('#step3456').append(rdata);
  }).fail(function() {
    console.log('ajax query failed')
    $('#step3456').append('Ajax query failed send help!');
  });
});

$('#count').on('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count/',
    method: 'GET',
    // data: {},
    dataType: 'html'
  }).done(function (rdata) {
    console.log('ajax query succeded');
    $('#step7').append(rdata);
  }).fail(function() {
    console.log('ajax query failed')
    $('#step7').append('Ajax query 7 failed send help!');
  });
});





});
