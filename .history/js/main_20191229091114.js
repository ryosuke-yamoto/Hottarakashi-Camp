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

//あっちの湯　こっちの湯　モーダル　出現

let attiButton = document.querySelector('.atti-spring');

let kottiButton = document.querySelector('.kotti-spring');

let contactButton = document.querySelector('.contact-button');

let attiModal = document.querySelector('.attinoyu');

let kottiModal = document.querySelector('.kottinoyu');

let contactModal = document.querySelector('.contact-form');

//モーダル　オーバーレイ
let overRay = document.createElement('div');

overRay.classList.toggle('modal-bg')

let footer = document.querySelector('footer')

document.body.insertBefore(overRay,footer)

let overRayStyle = {
    display: 'none',
    width: '100%',
    height: '100%',
    backgroundcolor: 'rgba(0,0,0,0,5)',
    position: 'fixed',
    zindex: '1'
}

for(var prop in overRayStyle) {

    overRay[prop] = overRayStyle[prop];
    
}

//ボタンクリックしたらモーダルとオーバーレイ出現するよ

attiButton.addEventListener('click',function() {
    if (kottiModal.classList.contains('open') === false  &&
        contactModal.classList.contains('open') === false) {
        attiModal.classList.add('open');
        // attiModal.classList.add('open');
    } else {
        event.preventDefault();
    }
})

kottiButton.addEventListener('click',function() {
    if (attiModal.classList.contains('open') === false &&
        contactModal.classList.contains('open') === false) {
        kottiModal.classList.add('open');
    } else {
        event.preventDefault();
    }
})

//お問合わせフォームモーダルの出現と制限時間設定

contactButton.addEventListener('click',function() {
    if (kottiModal.classList.contains('open') === false && 
        attiModal.classList.contains('open') === false) {
        contactModal.classList.add('open');
        let timerId = setInterval(function(){
            timeMsg.innerHTML = '<p>制限時間;' + reminingTimeNum + '秒 </p>'
            if (reminingTimeNum <= 0) {
                alert('制限時間終了')
                clearInterval(timerId)
                reminingTimeNum += 6
            }
            reminingTimeNum--
        },1000)
    } else {
        event.preventDefault();
    }
})

//バツ印押したらモーダル消える

let closeButton = document.querySelectorAll('.close-button');

closeButton.forEach(function(element) {
    element.addEventListener('click', function(){
        if (attiModal.classList.contains('open')) {
            attiModal.classList.remove('open');
        } else if (kottiModal.classList.contains('open')) {
            kottiModal.classList.remove('open');  
        } else if (contactModal.classList.contains('open')) {
            contactModal.classList.remove('open'); 
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
        let $answer = $(this).next()
        if ($answer.hasClass('open')) {
            $answer.slideUp().removeClass('open')
            $(this).attr('data-name','+')
        } else {
            $answer.slideDown().addClass('open')
            $(this).attr('data-name','-')
        }
    })    
});

//お問い合わせフォーム 残り文字数表示

let textarea = document.getElementById('textarea')

let maxTextNum  = textarea.getAttribute('maxlength')

let textMsg = document.createElement('div')

textMsg.innerHTML = '<p>あと「400」文字入力出来ます。</p>'

let parent = textarea.parentElement

parent.insertBefore(textMsg, textarea)

textarea.addEventListener('keyup', function() {
    let currentTextNum = textarea.value.length
    textMsg.innerHTML = '<p>あと「' + (maxTextNum - currentTextNum) + '」文字入力出来ます。</p>'
})

//お問合わせフォーム　制限時間

let reminingTimeNum = 5

let timeMsg = document.createElement('p')

let inputForm = document.querySelector('.input-form')

inputForm.appendChild(timeMsg)

//スクロールトップ　

$(function() {
    let topBtn = $('#scrollTop')

    topBtn.hide()

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn()
        } else {
            topBtn.fadeOut()
        }
    })

    topBtn.click(function (event) {
        event.preventDefault()
        $('body,html').animate({
            scrollTop: 0
        },700)
    })
});