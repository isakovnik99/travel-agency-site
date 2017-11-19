var modal = $(".modal");
var upArrow = $(".arrow-up");

$(modal).hide();

$(".get-in-touch-btn").click(function() {
  $(modal).show();
  $(upArrow).hide();
});

$(".cross-icon").click(function() {
  $(modal).hide();
  $(upArrow).show();
});
