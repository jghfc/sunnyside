const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.navigation_links')

// hamburger.addEventListener('click', ()=>{
//           if (nav_links.style.display === 'flex') {
//           nav_links.style.display = 'none'
//           }else{
//           nav_links.style.display = 'flex'
//           }
// })


hamburger.addEventListener('click', ()=>{
if (navlinks.style.display === 'flex') {
 navlinks.style.display = 'none'
}else{
navlinks.style.display = 'flex'
}
           })