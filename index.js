// !HIDDEN CARDS SCROLL

window.addEventListener(`scroll`, function() {
    let hiddenCard = document.querySelector("#carousel__fourthCard")
    let scroll = window.scrollY;
      if(scroll > 350) {
        hiddenCard.style.left= `0`
      } else {
        hiddenCard.style.left = `-2000px`
      }

})






// !CARDS HOVER

function mostraInfo (hover) {
    hover.style.display = "block"
}

function nascondiInfo (hover) {
    hover.style.display = "none"
}
