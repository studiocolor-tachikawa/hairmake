$(".slick").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  arrows: false,
  arrows: true,
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".target", {
    y: "50",
  });
});
