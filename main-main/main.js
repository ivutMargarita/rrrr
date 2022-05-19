$('.nav-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown').toggleClass('dropdown_active');   
});

$('.menu-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown_menu').toggleClass('dropdown_active');  
});

let info = document.getElementById('infostr');
let block = document.getElementById('heh');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    if(value < 200){
        info.style.opacity = 1 + (-0.005025131*(value-1));
        block.style.opacity = 0 + (0.005025131*(value-1));
    };
    if(value > 200){
        info.style.opacity = 0 + (0.005025131*(value-1));
        block.style.opacity = 1 + (-0.005025131*(value-1));
    };
    if(value > 200){
        info.style.opacity = 0;
        block.style.opacity = 1;
    };
    console.log(scrollY);
});