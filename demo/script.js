$(function(){
  $('.example1 textarea').css('overflow', 'hidden').autogrow();
  $('.example2 textarea').css('overflow', 'hidden').autogrow({vertical: true, horizontal: false});
  $('.example3 textarea').css('overflow', 'hidden').autogrow({vertical: false, horizontal: true});
  $('.example4 textarea').css('overflow', 'hidden').autogrow({flickering: false});
});
