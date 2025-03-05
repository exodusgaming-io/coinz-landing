$(document).ready(function () {

  $('.switch').click(function () {
    if ($('#checkbox1').is(':checked')) {
   
      $('body').removeClass('light')
    } else {
      $('body').addClass('light')
    }

   
  })

    $('.switch--mobile').click(function () {
    if ($('#checkbox2').is(':checked')) {
   
      $('body').removeClass('light')
    } else {
      $('body').addClass('light')
    }

   
  })

  $('.header__profile').click(function () {
    $('.profile-menu').toggleClass('active')
    return false;
  });

  $('.navbar__head').click(function () {
    $(this).toggleClass('active')
    $(this).next().slideToggle(300);
  })

  $('.burger').click(function () {
    $(this).children().toggleClass('active');
    $('.navbar').toggleClass('active')
    $('body').toggleClass('fixed')
    return false;
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.navbar').length) {
      $('.burger').removeClass('active')
      $('.navbar').removeClass('active')
      $('body').removeClass('fixed')
    }
    e.stopPropagation()
  });


  var SwiperSlot = new Swiper('.winner__cards', {
    spaceBetween: 20,
    slidesPerView: 4.7,
    centeredSlides: true,
    loop: true,
    spaceBetween: 12,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {

      320: {
        slidesPerView: 3.5,
        spaceBetween: 8,
      },

      767: {
        slidesPerView: 4.2,
      },

      991: {
        slidesPerView: 4.2,
      },

      1260: {
        slidesPerView: 4.2,
      },

    },
  });

  var SwiperSlot = new Swiper('.slots__slider--first', {
    spaceBetween: 12,
    slidesPerView: 5.5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 4.1,
        spaceBetween: 8,
      },

      767: {
        slidesPerView: 5.5,
      },

      991: {
        slidesPerView: 5.5,
      },

      1260: {
        slidesPerView: 5.5,
      },

    },
  });


  var SwiperSlot2 = new Swiper('.slots__slider--second', {
    spaceBetween: 12,
    slidesPerView: 5.5,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
      320: {
        slidesPerView: 4.1,
        spaceBetween: 8,
      },

      767: {
        slidesPerView: 5.5,
      },

      991: {
        slidesPerView: 5.5,
      },

      1260: {
        slidesPerView: 5.5,
      },

    },
  });

  var SwiperSlot3 = new Swiper('.slots__slider--third', {
    spaceBetween: 12,
    slidesPerView: 5.5,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
    breakpoints: {
      320: {
        slidesPerView: 4.1,
        spaceBetween: 8,
      },

      767: {
        slidesPerView: 5.5,
      },

      991: {
        slidesPerView: 5.5,
      },

      1260: {
        slidesPerView: 5.5,
      },

    },
  });


  const scrollable = document.getElementById('scrollable');

  scrollable.addEventListener('wheel', function (event) {
    event.preventDefault(); // предотвращает стандартное поведение прокрутки
    scrollable.scrollLeft += event.deltaY; // прокрутка по горизонтали
  });

});

document.querySelectorAll(".select").forEach((select) => {
  const main = select.querySelector(".select_main");
  const variants = select.querySelectorAll(".select_variant");
  main.addEventListener("click", function () {
      document.querySelectorAll(".select").forEach((select) => {
          select.classList.remove("active");
      });
      select.classList.toggle("active");
  });
  variants.forEach((variant) => {
      variant.addEventListener("click", function () {
          const icon = variant.querySelector(".select_variant_value_icon img");
          const text = variant.querySelector(".select_variant_value_text");
          if (icon) {
              main.querySelector(".select_main_value_icon img").src = icon.src;
          }
          main.querySelector(".select_main_value_text").textContent = text.textContent;
          select.querySelector(".select_variant.active")?.classList.remove("active");
          variant.classList.add("active");
          select.classList.remove("active");
      });
  });
});

window.addEventListener("click", function (e) {
  if (!e.target.closest(".select")) {
      document.querySelectorAll(".select").forEach((select) => {
          select.classList.remove("active");
      });
  }
});




