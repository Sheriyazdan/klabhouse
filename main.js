// let toScroll = false
// function playMusic(sec){
//     const $audio = document.getElementById('audio')
//     $audio.currentTime = sec
//     $audio.play()
// }
// function addBlock(btn){
//     if (buttonclick = document.querySelector('.block__main_buttons')){
//         var newDiv = '<div class="main__block__inner">' + document.querySelector('.main__block').innerHTML + '</div>'
//         document.querySelector('.main__block').innerHTML = newDiv 
//         document.querySelector('.block__title').innerHTML = btn.innerHTML
//         document.querySelector('.head__line__block__text').innerHTML = btn.innerHTML
//         document.querySelector('.block_for_second_button').classList.add('active')
//         document.querySelector('.block_for_second_button').classList.add('remove')
//     }
// }
// function myButton(){
//     document.querySelector('.long__text__button').classList.toggle('active')
//     document.querySelector('.my__button').classList.toggle('active')
// }
// function burgerMenu(){
//     if(true){
//         document.querySelector('.burger__on__click').classList.toggle('active')
//         document.querySelector('#rect').classList.toggle('active')


//         document.querySelectorAll('.burger__line').forEach(el => {
//             el.classList.toggle('burgerActive')
//         })

//     }
//     if(toScroll = false){
//         document.querySelector('nav').classList.toggle('active')
//     }
//     }



// window.addEventListener('scroll', function () {
    
//     var y = window.scrollY

//     if(y>10){
//         toScroll = true
//         const nav =  document.querySelector('nav')
//         nav.classList.add('active')
//         document.querySelector('.burger__line').classList.add('burgerBlack')
//         document.querySelector('#rect').classList.add('active')
//     }
//     else{
//         if(document.querySelector('.burger__on__click').classList.contains('active')){
//             document.querySelector('.burger').click()
//         }
//         document.querySelector('nav').classList.remove('active')
//         document.querySelector('.burger__line').classList.remove('burgerBlack')
//         document.querySelector('#rect').classList.remove('active')
//     }
//     if(y>127){
//         document.querySelector('.footer__button').classList.add('active')
//     }
//     else{
//         document.querySelector('.footer__button').classList.remove('active')
//     }
    
// })
// footerButton = ()=> {
//     window.scrollTo({top:0,behavior:'smooth'});
// }

function burgerMenu(val){
    let burger = document.querySelectorAll('.burger__line')
    burger.forEach(element => {
        element.classList.toggle('burgerActive')
    });
    document.querySelector('.burger__on__click').classList.toggle('active')
    document.querySelector('nav').classList.toggle('active')
    document.querySelector('#rect').classList.toggle('active')
}
window.addEventListener('scroll', function () {   
    var y = window.scrollY
    if(y>10){
        let burger = document.querySelectorAll('.burger__line')
        burger.forEach(element => {
            element.classList.add('white')
        });
        document.querySelector('nav').classList.add('white')
        document.querySelector('#rect').classList.add('white') 
    }
    else{
        let burger = document.querySelectorAll('.burger__line')
        burger.forEach(element => {
            element.classList.remove('white')
            element.classList.remove('burgerActive')
        });
        document.querySelector('nav').classList.remove('white')
        document.querySelector('#rect').classList.remove('white')
        document.querySelector('.burger__on__click').classList.remove('active')
        document.querySelector('nav').classList.remove('active')
        document.querySelector('#rect').classList.remove('active')
    }
});




function chenBerik(value){
    let elem = document.querySelector('.berikbol')
    let $znak = document.querySelector("polzunok")
    console.log(value)
    pos = 2 *value
    elem.style.width = pos + "px";
}
