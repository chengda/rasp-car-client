//multipage

let isPc = () => {
  return !isMobile()
}

let isMobile = () => {
  return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)
}

let params = window.location.search + window.location.hash

if (isPc()) {
  window.location.href = 'pc_index.html' + params
} else if (isMobile()) {
  window.location.href = 'mobile_index.html' + params
}
