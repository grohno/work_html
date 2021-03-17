$(function(){
  $('#accordion form').hide();
  $('#accordion p.open').on('click', function(){
    $(this).next('form').slideToggle();
  });
});
