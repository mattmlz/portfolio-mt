class Header {
  constructor() {
    this.links()
  }

  links() {
    //Set variables
    const $logo = document.querySelector('.logoHeader')

    //back to homepage with click on header logo
    $logo.addEventListener('click', () => {
      document.location.href='../../index.html'
    })
  }
}