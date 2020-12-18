$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    300: {
      items: 2
    },
    600: {
       items: 4
    },
    1000: {
       items: 6
    }
  }
})