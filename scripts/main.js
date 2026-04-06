const openModalButton = document.querySelector('.button-modal')
const modal = document.querySelector('.popup')
const closeModalButton = modal.querySelector('.popup__close')

const openModal = (popup) => {
    popup.classList.add('is-open')
    document.body.classList.add('is-lock')
}

const closeModal = (popup) => {
    popup.classList.remove('is-open')
    document.body.classList.remove('is-lock')
}

openModalButton.addEventListener('click', () => {
    openModal(modal)
})

closeModalButton.addEventListener('click', () => {
    closeModal(modal)
})

document.addEventListener('click', (evt) => {
    if (evt.target === modal) {
        closeModal(modal)
    }
})

document.addEventListener('keydown', (evt) => {
    if (modal.classList.contains('is-open') && evt.key === 'Escape') {
        closeModal(modal)
    }
})


