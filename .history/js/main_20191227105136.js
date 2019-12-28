let attiButton = document.querySelector('.atti-spring');

let kottiButton = document.querySelector('.kotti-spring');

let attiModal = document.querySelector('.attinoyu');

let kottiModal = document.querySelector('.kottinoyu');

attiButton.addEventListener('click',function() {
    attiModal.classList.add('open');
})

kottiButton.addEventListener('click',function() {
    kottiModal.classList.add('open');
})



let closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click',function() {
    attiModal.classList.remove('open');
})