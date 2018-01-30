const header = new Header()

if(document.location.href.match('work.html')){
  const lazyLoadingWork = new LazyLoadingWork()
}else if(document.location.href.match('work/dev.html')){
  const lazyLoadingDev = new LazyLoadingDev()
}
