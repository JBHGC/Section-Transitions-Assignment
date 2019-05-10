// hx = []
let hx = document.getElementsByTagName('section')

window.addEventListener('scroll', function(){
  count = 0
  for (hh of hx) {
    // if (hh.classList.contains('hidden') == hh.classList.contains('hidden') || hh.classList.contains('unshow') == hh.classList.contains('unshow')){
    if (window.scrollY > 300 * count+1) {
    // hh.classList.remove('unshow')
    hh.classList.remove('hidden')
    hh.classList.add('show')
    count++
    }
  }
  }
)
// window.addEventListener('scroll', function(){
//   count = 5
//   for (hh of hx) {
//     if (window.scrollY  == hx[count-2].classList.contains('show')){
//     if (window.scrollY < 150 * count-2) {
//     hx[count-2].classList.add('unshow')
//     hx[count-2].classList.remove('show')
//     hx[count-2].classList.add('hidden')
//     count--
//     }
//   }
// }
// })
