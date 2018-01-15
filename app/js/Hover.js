class Hover {
  constructor() {
    this.workHover()
  }

  workHover() {
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