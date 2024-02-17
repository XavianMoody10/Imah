"use strict";

// TOGGLE THE MOBILE NAVIGATION
function toggleMobileNavigation() {
  const navigation = document.querySelector(".header-navigation");
  const mobileIcon = document.querySelector(".header-burger-icon");
  const topLine = document.querySelector(".header-burger-icon__top-line");
  const middleLine = document.querySelector(".header-burger-icon__middle-line");
  const bottomLine = document.querySelector(".header-burger-icon__bottom-line");
  const topLineOpenClass = "header-burger-icon__top-line--active";
  const middleLineOpenClass = "header-burger-icon__middle-line--active";
  const bottomLineOpenClass = "header-burger-icon__bottom-line--active";
  const topLineCloseClass = "header-burger-icon__top-line--nonactive";
  const middleLineCloseClass = "header-burger-icon__middle-line--nonactive";
  const bottomLineCloseClass = "header-burger-icon__bottom-line--nonactive";
  let isOpen = false;

  function toggleAction(e) {
    e.preventDefault();

    function addOpenClasses() {
      topLine.classList.add(topLineOpenClass);
      middleLine.classList.add(middleLineOpenClass);
      bottomLine.classList.add(bottomLineOpenClass);
      topLine.classList.remove(topLineCloseClass);
      middleLine.classList.remove(middleLineCloseClass);
      bottomLine.classList.remove(bottomLineCloseClass);
    }

    function addCloseClasses() {
      topLine.classList.remove(topLineOpenClass);
      middleLine.classList.remove(middleLineOpenClass);
      bottomLine.classList.remove(bottomLineOpenClass);
      topLine.classList.add(topLineCloseClass);
      middleLine.classList.add(middleLineCloseClass);
      bottomLine.classList.add(bottomLineCloseClass);
    }

    if (!isOpen) {
      isOpen = true;
      navigation.style.transform = "translateX(0)";
      addOpenClasses();
    } else {
      isOpen = false;
      navigation.style.transform = "translateX(-100%)";
      addCloseClasses();
    }
  }

  mobileIcon.addEventListener("touchstart", toggleAction);
  mobileIcon.addEventListener("click", toggleAction);
}

// TOGGLE THE TESTIMONIAL SLIDER
function testimonialSlider() {
  const prevArrow = document.querySelector(".testimonial-arrow__left");
  const nextArrow = document.querySelector(".testimonial-arrow__right");
  const cardName = document.querySelector(
    ".testimonial-card__name:nth-of-type(1)"
  );
  const cardImage = document.querySelector(
    ".testimonial-card__pic:nth-of-type(1)"
  );
  const cardTestimony = document.querySelector(
    ".testimonial-card__testimony:nth-of-type(1)"
  );

  let slideTracker = 0;

  // All testimonies data
  const testimonies = [
    {
      image: "/assets/images/user-1.jpg",
      name: "Menta Nia",
      testimony:
        "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non",
    },
    {
      image: "/assets/images/user-2.jpg",
      name: "Sannad",
      testimony:
        "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non",
    },
    {
      image: "/assets/images/user-3.jpg",
      name: "George",
      testimony:
        "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non",
    },
  ];

  // TESTIMONY PREVIOUS SLIDE ACTION
  function prevSlide(e) {
    if (slideTracker !== 0) {
      slideTracker = slideTracker - 1;
      cardImage.src = testimonies[slideTracker].image;
      cardName.textContent = testimonies[slideTracker].name;
      cardTestimony.textContent = testimonies[slideTracker].testimony;
    }
  }

  // TESTIMONY NEXT SLIDE ACTION
  function nextSlide(e) {
    if (slideTracker !== testimonies.length - 1) {
      slideTracker = slideTracker + 1;
      cardImage.src = testimonies[slideTracker].image;
      cardName.textContent = testimonies[slideTracker].name;
      cardTestimony.textContent = testimonies[slideTracker].testimony;
    }
  }

  // RESET TESTIMONY BACK TO DEFAULT
  function resetToDefaultHandler() {
    const currentWidth = window.innerWidth;

    if (currentWidth >= 828) {
      cardImage.src = testimonies[0].image;
      cardName.textContent = testimonies[0].name;
      cardTestimony.textContent = testimonies[0].testimony;
    }
  }

  prevArrow.addEventListener("click", (e) => {
    if (e.buttons === 0) {
      prevArrow.classList.add("arrow--active");
      prevSlide();
    }
  });

  prevArrow.addEventListener("touchstart", (e) => {
    e.preventDefault();
    prevArrow.classList.add("arrow--active");
    prevSlide();
  });

  prevArrow.addEventListener("touchend", (e) => {
    prevArrow.classList.remove("arrow--active");
  });

  nextArrow.addEventListener("click", (e) => {
    if (e.buttons === 0) {
      nextArrow.classList.add("arrow--active");
      nextSlide();
    }
  });

  nextArrow.addEventListener("touchstart", (e) => {
    e.preventDefault();
    nextArrow.classList.add("arrow--active");
    nextSlide();
  });

  nextArrow.addEventListener("touchend", (e) => {
    nextArrow.classList.remove("arrow--active");
  });

  window.addEventListener("resize", resetToDefaultHandler);
}

testimonialSlider();
toggleMobileNavigation();
