
//スクロールでヘッダーのclassが変わる
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("scroll-header", window.scrollY > 20);
});

// ドロワーメニュー
$(function () {
  $(".header-nav-items").css("display", "none");
  $(".header-nav-button").on("click", function () {
      $(".header-nav-items").slideToggle();
      $('body').addClass('fixed').css({'top': -scrollpos});
  });
});

$(function () {
  $(".header-nav-item-close").on("click", function () {
    $(".header-nav-items").css("display", "none");
  });
});
