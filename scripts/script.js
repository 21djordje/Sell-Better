$(document).ready(function () {
  $(".event-box > .row").on("click", function () {
    var row = $(this).closest(".event-box");
    row.find(".acc-icon a").trigger("click");
  });
});
