var a = true
document.querySelector('#submit').onclick = function () {
    if( a === true){
        anime({
        targets: '.loop',
        translateX: 75, // -> '250px'
        easing: 'linear',
        direction: 'normal',

    });
        a = false

    }
    else{
        anime({
        targets: '.loop',
        translateX: -75, // -> '250px'
        easing: 'linear',
        direction: 'normal',

    });
        a = true

    }


}

