jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 5000,
    },
    // ページネーションが必要なら追加
    pagination: {
      el: ".swiper-pagination",
    },
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
