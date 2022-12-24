// var cursor1 = document.querySelector('.cursor-1')
// var cursor2 = document.querySelector('.cursor-2')

// window.onmousemove = (e) =>{
//     cursor1.style.top = e.pageY + 'px'
//     cursor1.style.left = e.pageX + 'px'
//     cursor2.style.top = e.pageY + 'px'
//     cursor2.style.left = e.pageX + 'px'
// }
// let links = document.querySelectorAll('a').forEach(links =>{
//     links.onmouseenter = ()=>{
//         cursor1.classList.add('active')
//         cursor2.classList.add('active')
//     }
//     links.onmouseleave = ()=>{
//         cursor1.classList.remove('active')
//         cursor2.classList.remove('active')
//     }
// })


var ham = document.querySelector('.hamburger')
var navMenu = document.querySelector('nav')
var hamOpen = document.querySelector('.menuIcon')
var hamClose = document.querySelector('.closeIcon')
const text = "EMMANUEL PORTFOLIO"
let index = 0

function write(){

    var content = document.querySelector('#info')

    content.innerText = text.slice(0, index)
    index++
}
setInterval(write, 300)





hamOpen.addEventListener('click', ()=>{

        navMenu.classList.add('active')
        hamOpen.style.display = "none"
        hamClose.style.display = "block"

  
})
hamClose.addEventListener('click', ()=>{
    navMenu.classList.remove('active')
    // navMenu.style.display = "none"
    hamClose.style.display = "none"
    hamOpen.style.display = "block"
})
document.querySelectorAll('nav ul li a').forEach(e => e.addEventListener('click', ()=>{
    navMenu.classList.remove('active')
    hamClose.style.display ="none"
    hamOpen.style.display = "block"
}))