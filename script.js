"use strict";

const modal = document.querySelector('.modal'),
    overlay = document.querySelector('.overlay'),
    btnCloseModal = document.querySelector('.close-modal'),
    btnsShowModal = document.querySelectorAll('.show-modal');

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsShowModal.forEach(e => e.addEventListener("click", openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', ev => {
    if (ev.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
