$(function () {
  // ①
 $('.fadein').hide();

 $('.fadein').each(function (i) {
  // ③
    $(this).delay(750 * i).fadeIn(1000);
  });
});

