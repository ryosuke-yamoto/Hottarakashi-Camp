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
    kottiModal.classList.add('open');
})



let closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click',function() {
    attiModal.classList.remove('open');
})