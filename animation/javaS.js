let btn = document.querySelector('.button')
elem = document.querySelector('.border-block')
toTop = true

// function Animate() {
//     let pos = 0
//     let trans = 0

//     function frame() {

//         if(pos<700){
//             pos++
//             elem.style.top = pos +"px";
//             elem.style.left = pos +"px";
//         }

//     }    
// }

function motion() {
    let transValue = 0
    setInterval(translate, 300)

    function translate() {
        elem.style.transform = 'translate(' + transValue + 'px, ' + transValue + 'px)'

        if (transValue + elem.offsetHeight >= window.innerHeight) {
            toTop = false
        } else if (transValue === 0) {
            toTop = true
        }

        if (toTop) {
            transValue = transValue + 5
        } else {
            transValue = transValue - 5
        }

    }
}

btn.addEventListener('click', motion)