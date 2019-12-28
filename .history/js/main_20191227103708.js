let attiButton = document.querySelector('.atti-spring');

let attiModal = document.querySelector('.attinoyu');

attiButton.addEventListener('click',function() {
    attiModal.classList.add('open');
})

let closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click',function() {
    attiModal.classList.remove('open');
})