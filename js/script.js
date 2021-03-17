$(function(){
  $('#accordion form').hide();
  $('#accordion p.open').on('click', function(){
    $(this).next('form').slideToggle();
  });
  $('.btn input').on('mouseenter', function(){
    $(this).css('background-color', 'yellowgreen');
  })
  .on('mouseleave', function(){
    $(this).css('background-color', '#ea5550');
  });
});
