class LazyLoadingDev {
  constructor() {
    this.lazyLoadDev()
  }

  lazyLoadDev() {
    //Set variables
    const $loader = document.querySelector('.breeding-rhombus-spinner')
    //Put nodeList in a 'real' array
    const $lazyLoad = [].slice.call(document.querySelectorAll('.lazy-load'))
    
    //Add loader until page is loading
    document.addEventListener("DOMContentLoaded", function(event) {
      $loader.style.display = 'inline'
    })
    //Wait the load of the page to show the divs
    window.addEventListener('load', (event) => {
      for(let i = 0; i < $lazyLoad.length; i++) {
        const $div = $lazyLoad[i]
        $div.classList.add('loaded')
      }
      //Remove loader
      $loader.style.display = 'none'
    })
  }
}