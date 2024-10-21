const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(bt){
    console.log(bt);
    bt.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
    });
});