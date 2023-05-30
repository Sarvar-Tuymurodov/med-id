export const modalComponent = function () {
    let body = document.querySelector('body');
    let buttons = document.querySelectorAll('[data-modal-target]');
    buttons.forEach((btn) => {
        let targetModal = document.querySelector(`${btn.dataset.modalTarget}`);
        targetModal.style.scale = 0;

        btn.addEventListener('click', function (e) {
            targetModal.style.zIndex = 200;
            targetModal.style.scale = 1;
            targetModal.classList.add('show');
            body.classList.add('lock');
        });

        targetModal
            .querySelector('.modal__close')
            .addEventListener('click', function () {
                targetModal.classList.remove('show');
                body.classList.remove('lock');
                setTimeout(function () {
                    targetModal.style.scale = 0;
                    targetModal.style.zIndex = -1;
                }, 300);
            });

        targetModal
            .querySelector('.modal-save')
            ?.addEventListener('click', function () {
                targetModal.classList.remove('show');
                body.classList.remove('lock');
                setTimeout(function () {
                    targetModal.style.scale = 0;
                    targetModal.style.zIndex = -1;
                }, 300);
            });
    });
};
