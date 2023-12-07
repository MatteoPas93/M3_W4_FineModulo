// !HIDDEN CARDS SCROLL

// window.addEventListener(`scroll`, function() {
//     let hiddenCard = document.querySelector("#carousel__fourthCard")
//     let scroll = window.scrollY;
//       if(scroll > 1050) {
//         hiddenCard.style.left= `0`
//       } else {
//         hiddenCard.style.left = `-2000px`
//       }

// })


// window.addEventListener(`scroll`, function() {
//   let showCard = document.querySelector("#carousel__scrollCard")
//   let scroll = window.scrollY

//   if (scroll > 1250) {
//     showCard.style.left=`0`
//   } else {
//     showCard.style.left=`-2000px`
//   }
// })



// !SCROLL 2

function fadeInElement(element) {
  element.style.opacity = '1';
  element.style.transform = 'translateX(0)';
}

function fadeOutElement(element) {
  element.style.opacity = '0';
  element.style.transform = 'translateX(-50px)';
}

function checkScroll() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const rect = carousel.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top >= 0 && rect.top <= windowHeight) {
      fadeInElement(carousel);
    } else {
      fadeOutElement(carousel);
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);
window.addEventListener('load', checkScroll);

// !CARDS HOVER

// function mostraInfo (hover) {
//     hover.style.display = "block"
// }

// function nascondiInfo (hover) {
//     hover.style.display = "none"
// }
