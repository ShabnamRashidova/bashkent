$(document).ready(function() {
    $(".gallery a").fancybox();
  });
  $(document).ready(function() {
$(".gallery a").attr("data-fancybox","mygallery");
$(".gallery a").each(function(){
$(this).attr("data-caption", $(this).find("img").attr("alt"));
$(this).attr("title", $(this).find("img").attr("alt"));
});

$(".gallery a").fancybox();
});