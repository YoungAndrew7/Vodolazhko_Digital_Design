window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__button').addEventListener('click', function(){
    document.querySelector('.header__button').classList.toggle('is-active__button')
    document.querySelector('#menu').classList.toggle('is-active')
  })
})
