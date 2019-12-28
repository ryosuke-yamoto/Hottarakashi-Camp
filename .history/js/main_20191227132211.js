//ヘッダーのドロップダウンメニュー

let ddmenuUl = document.querySelector('.ddmenu');

let ddmenuHeight = ddmenuUl.clientHeight;

let hum = document.querySelector('.hum')

hum.addEventListener('click',function(){
    ddmenuUl.animate(
        {
            height: [
                '0px',
                '100px'
            ]
        },
        {
            duration: 500,
            fill: forwards
        }
    );
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

let closeButton = document.querySelector('.close-button');

// closeButton.addEventListener('click',function() {
//     kottiModal.style.color = '#3366FF';
// })

closeButton.addEventListener('click',function() {
    if (attiModal.classList.contains('open')) {
        attiModal.classList.remove('open');
    } else if (kottiModal.classList.contains('open')) {
        kottiModal.classList.remove('open');  
    } else {
        event.preventDefault();
    }
})