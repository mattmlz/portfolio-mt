class LazyLoadingWork {
  constructor() {
    this.lazyLoadWork()
  }

  lazyLoadWork() {
    //Set variables
    const $loader = document.querySelector('.breeding-rhombus-spinner')
    //Put nodeList in a 'real' array
    const $lazyLoad = [].slice.call(document.querySelectorAll('.lazy-load'))
    

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
      workHover()
    })

    //Hover on the 2 divs
    const workHover = () => {
      const $sections = document.querySelector('.workSections')
      const $dev = $sections.querySelector('.sectionDev')
      const $design = $sections.querySelector('.sectionDesign')
      
      //Actions on $dev
      $dev.addEventListener('mouseover', () => {
        $dev.style.opacity = '1'
        $dev.style.cursor = 'pointer'
      })
      $dev.addEventListener('mouseleave', () => {
        $dev.style.opacity = '0.5'
      })
  
      $dev.addEventListener('click', () => {
        window.location.href = '../pages/work/dev.html'
      })
  
      //Actions on $design
      $design.addEventListener('mouseover', () => {
        $design.style.opacity = '1'
        $design.style.cursor = 'pointer'
      })
      $design.addEventListener('mouseleave', () => {
        $design.style.opacity = '0.5'
      })
      $design.addEventListener('click', () => {
        window.location.href = '../pages/work/design.html'
      })
    }
  }
}
