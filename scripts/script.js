$(document).ready(function () {
  $(".event-box > .row").on("click", function () {
    var row = $(this).closest(".event-box");
    row.find(".acc-icon a").trigger("click");
  });

  var listOfClasses = [
    "color-scheme-1",
    "color-scheme-2",
    "color-scheme-3",
    "color-scheme-4",
  ];
  var randomNum = Math.floor(Math.random() * listOfClasses.length);
  $(".hero-desktop").addClass(listOfClasses[randomNum]);
});
