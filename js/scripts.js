// $("h1").click(function () {
//   alert("This is a heading tag");
// });

// $("p").click(function () {
//   alert("This is a paragraph");
// });

// $("img").click(function () {
//   alert("This is an image");
// });
// $("h1").click(function () {
//   alert("This is a header.");
//   alert("I told you, THIS IS A HEADER!");
// });
$(document).ready(function () {
  $("p").click(function () {
    $("img").show();
  });
});
$(document).ready(function () {
  $("p").click(function () {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});
