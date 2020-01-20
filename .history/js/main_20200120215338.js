//ヘッダーのドロップダウンメニュー
//ハンバーガーメニュー押したらドロップダウン

let ddmenuUl = document.querySelector('.ddmenu')

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
        )
    }
})

//ドロップアップ
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
            )
        }
    }
})

//モーダルの要素　モーダル出現ボタン定義

//あっちの湯モーダル
let attiButton = document.querySelector('.atti-spring')

let attiModal = document.querySelector('.attinoyu')


//こっちの湯モーダル
let kottiButton = document.querySelector('.kotti-spring')

let kottiModal = document.querySelector('.kottinoyu')

//お問い合わせフォームモーダル
let contactButton = document.querySelector('.contact-button')

let contactModal = document.querySelector('.contact-form')

//オーバーレイ定義　モーダルボタン押したらdiv要素が追加される
let overRay = document.createElement('div')

overRay.classList.add('modal-bg')

let footer = document.querySelector('footer')

//ボタンクリックしたらモーダルとオーバーレイ出現する

attiButton.addEventListener('click',function() {
    if (kottiModal.classList.contains('open') === false  &&
        contactModal.classList.contains('open') === false) {
        attiModal.classList.add('open')
        //オーバーレイも出現させる
        document.body.insertBefore(overRay,footer)
    } else {
        event.preventDefault()
    }
})

kottiButton.addEventListener('click',function() {
    if (attiModal.classList.contains('open') === false &&
        contactModal.classList.contains('open') === false) {
        kottiModal.classList.add('open')
        document.body.insertBefore(overRay,footer)
    } else {
        event.preventDefault()
    }
})

//お問合わせフォームモーダルの出現と制限時間設定

contactButton.addEventListener('click',function() {
    if (kottiModal.classList.contains('open') === false && 
        attiModal.classList.contains('open') === false) {
        //お問合わせフォームモーダルの出現
        contactModal.classList.add('open')
        //オーバーレイも出現させる
        document.body.insertBefore(overRay,footer)
        //制限時間設定
        let timerId = setInterval(function(){
            timeMsg.innerHTML = '<p>制限時間;' + reminingTimeNum + '秒 </p>'
            if (reminingTimeNum <= 0) {
                alert('制限時間終了')
                clearInterval(timerId)
                contactModal.classList.remove('open')
                overRay.remove()
                textarea.value = ''
                textMsg.innerHTML = '<p>あと「400」文字入力出来ます。</p>'
                reminingTimeNum = 6
            } else if (contactModal.classList.contains('open') === false) {
                //カウントダウン中にモーダル閉じたらカウントダウン中断する
                clearInterval(timerId)
                reminingTimeNum = 6
            }
            reminingTimeNum--
        },1000)
    } else {
        event.preventDefault()
    }
})

//バツ印押したらモーダル消える

let closeButton = document.querySelectorAll('.close-button')

closeButton.forEach(function(element) {
    element.addEventListener('click', function(){
        if (attiModal.classList.contains('open')) {
            attiModal.classList.remove('open')
            //オーバーレイも消える
            overRay.remove()
        } else if (kottiModal.classList.contains('open')) {
            kottiModal.classList.remove('open') 
            overRay.remove()
        } else if (contactModal.classList.contains('open')) {
            contactModal.classList.remove('open')
            overRay.remove()
        } else {
            event.preventDefault()
        }
    })
})

//フォトギャラリー

//画像部分とフレーム定義

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

//サブフレームに画像入れる

for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src',album[i].src);
    thumbFlame[i].insertBefore(thumbImage,null);
}

//サブフレームの画像クリックしたらメイン画像が切り替わる

thumbFlame.forEach(function(flame){
    flame.addEventListener('click',function(event){
        if (event.target.src) {
            mainImage.src = event.target.src;
        }
    }) 
})

//questionのanswer出現・消失
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

//テキストエリア最大文字数
let maxTextNum  = textarea.getAttribute('maxlength')

//テキストメッセージ
let textMsg = document.createElement('div')

textMsg.innerHTML = '<p>あと「400」文字入力出来ます。</p>'

let parent = textarea.parentElement

parent.insertBefore(textMsg, textarea)

//キーアップするテキストメッセージの表示文字数が少なくなる
textarea.addEventListener('keyup', function() {
    let currentTextNum = textarea.value.length
    textMsg.innerHTML = '<p>あと「' + (maxTextNum - currentTextNum) + '」文字入力出来ます。</p>'
})

//お問合わせフォーム　制限時間 定義

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