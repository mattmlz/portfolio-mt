class LazyLoadingDev {
  constructor() {
    this.lazyLoadDev()
  }

  lazyLoadDev() {
    //Set variables
    const $loader = document.querySelector('.breeding-rhombus-spinner')
    const $body = document.querySelector('body')
    //Put nodeList in a 'real' array
    const $lazyLoad = [].slice.call(document.querySelectorAll('.lazy-load'))
    
    //Add loader until page is loaded
    document.addEventListener("DOMContentLoaded", function(event) {
      $loader.style.display = 'inline'
      $body.style.overflow = 'hidden'
    })
    //Wait the load of the page to show the divs
    window.addEventListener('load', (event) => {
      for(let i = 0; i < $lazyLoad.length; i++) {
        const $div = $lazyLoad[i]
        $div.classList.add('loaded')
      }
      //Remove loader
      $loader.style.display = 'none'
      $body.style.overflow = 'auto'
    })
  }
}