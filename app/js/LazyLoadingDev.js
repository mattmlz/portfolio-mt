class LazyLoadingDev {
  constructor() {
    this.lazyLoadDev()
  }

  lazyLoadDev() {
    //Put nodeList in a 'real' array
    const $lazyLoad = [].slice.call(document.querySelectorAll('.lazy-load'))
    
    //Wait the load of the page to show the divs
    window.addEventListener('load', (event) => {
      for(let i = 0; i < $lazyLoad.length; i++) {
        const $div = $lazyLoad[i]
        $div.classList.add('loaded')
      }
    })
  }
}