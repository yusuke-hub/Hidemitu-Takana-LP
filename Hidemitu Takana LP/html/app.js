$(function () {
  $('.nav-item').hide();

 $('.nav-item').each(function (i) {
  // ③
    $(this).delay(750 * i).fadeIn(1000);
  });
});

// $(function () {
//   $('.nav-item').hide();

//  $('.nav-home,.nav-profile,.nav-news,.nav-work,.nav-contact').each(function (i) {
//   // ③
//     $(this).delay(750 * i).fadeIn(1000);
//   });

 //   $('.nav-link2').each(function (i) {
 //  // ③
 //    $(this).delay(750 * i).fadeIn(1000);
 //  });

 //    $('.nav-link3').each(function (i) {
 //  // ③
 //    $(this).delay(750 * i).fadeIn(1000);
 //  });

 //     $('.nav-link4').each(function (i) {
 //  // ③
 //    $(this).delay(750 * i).fadeIn(1000);
 //  });
 // $('.nav-link5').each(function (i) {
 //  // ③
 //    $(this).delay(750 * i).fadeIn(1000);
 //  });
    // $('.nav-link2').delay(750 * i).fadeIn(1000);
    // $('.nav-link3').delay(750 * i).fadeIn(1000);
    // $('.nav-link4').delay(750 * i).fadeIn(1000);
    // $('.nav-link5').delay(750 * i).fadeIn(1000);

