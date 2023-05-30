const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
});

const isNotInternet = function () {
    if (!navigator.onLine) {
        Toast.fire({
            icon: 'error',
            title: 'Internet mavjud emas!',
        });
    }
};

const waitTimeIsUp = function () {
    Toast.fire({
        icon: 'error',
        title: 'Kutish vaqti tugadi!',
    });
};

export { isNotInternet };
