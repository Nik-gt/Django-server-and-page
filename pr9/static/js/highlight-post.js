$(document).ready(function () {
  $(".post-shadow").hover(
    function (event) {
      $(event.currentTarget).animate({ opacity: "0.3" }, 300);
    },
    function (event) {
      $(event.currentTarget).animate({ opacity: "1" }, 300);
    }
  );
  

  $(".header img").hover(
    function (event) {
      $(event.currentTarget).animate({ width: "338px" }, 300);
    },
    function (event) {
      $(event.currentTarget).animate({ width: "318px" }, 300);
    }
  );
});
