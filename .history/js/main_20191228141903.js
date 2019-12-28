//ヘッダーのドロップダウンメニュー

let ddmenuUl = document.querySelector('.ddmenu');

let hum = document.querySelector('.hum')

hum.addEventListener('click',function(){
    if (ddmenuUl.clientHeight === 80 )　{
        preventDefault
    } else {
        ddmenuUl.animate(
            {
                height: [
                    '0px',
                    '80px'
                ]
            },
            {
                duration: 500,
                fill: 'forwards'
            }
        );
    }
})

document.addEventListener('click',function(event) {
    if (ddmenuUl.clientHeight === 80 )　{
        if (event.target.parentNode.classList.contains('ddmenu') === false) {
            ddmenuUl.animate(
                {
                    height: [
                        '80px',
                        '0px'
                    ]
                },
                {
                    duration: 500,
                    fill: 'forwards'
                }
            );
        }
    }
})

//ほったらかし温泉　モーダル

let attiButton = document.querySelector('.atti-spring');

let kottiButton = document.querySelector('.kotti-spring');

let attiModal = document.querySelector('.attinoyu');

let kottiModal = document.querySelector('.kottinoyu');

attiButton.addEventListener('click',function() {
    if (kottiModal.classList.contains('open') === false) {
        attiModal.classList.add('open');
    } else {
        event.preventDefault();
    }
})

kottiButton.addEventListener('click',function() {
    if (attiModal.classList.contains('open') === false) {
        kottiModal.classList.add('open');
    } else {
        event.preventDefault();
    }
})

let closeButton = document.querySelectorAll('.close-button');

closeButton.forEach(function(element) {
    element.addEventListener('click', function(){
        if (attiModal.classList.contains('open')) {
            attiModal.classList.remove('open');
        } else if (kottiModal.classList.contains('open')) {
            kottiModal.classList.remove('open');  
        } else {
            event.preventDefault();
        }
    })
})

//フォトギャラリー

let album = [
    {src: './img/1564997869941.jpg'},
    {src: './img/1564997868131.jpg'},
    {src: './img/DSC_0641.JPG'},
    {src: './img/1564997875227-1.jpg'},
    {src: './img/1564997878108.jpg'}
]

let mainImage = document.createElement('img');

mainImage.setAttribute('src', album[0].src);

let mainFlame = document.querySelector('.main-flame');

mainFlame.insertBefore(mainImage, null);

let thumbFlame = document.querySelectorAll('.thumb-flame');


for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src',album[i].src);
    thumbFlame[i].insertBefore(thumbImage,null);
}

thumbFlame.forEach(function(flame){
    flame.addEventListener('click',function(event){
        if (event.target.src) {
            mainImage.src = event.target.src;
        }
    }) 
})

//questionのanswer
//jquery

$(function(){
    $('.question-text').on('click',function() {
        if ($('.answer').hasClass('open')) {
            $(this).next().removeClass('open')
        } else {
            $(this).next().addClass('open')
        }
    })
});