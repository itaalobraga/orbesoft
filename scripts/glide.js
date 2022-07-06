const config = {
  type: "carousel",
  startAt: 0,
  perView: 4,
  autoplay: 5000,
  hoverpause: true,
  rewind: true,
  breakpoints: {
    992: {
      perView: 3
    },
    665: {
      perView: 2
    },
    360: {
      perView: 1
    }
  }
};

const glide = new Glide(".glide", config);

glide.mount();
