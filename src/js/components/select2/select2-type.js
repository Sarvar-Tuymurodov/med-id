const selectClientsGetData = (id) => {
    $(`#${id}`).select2({
        allowClear: true,
        placeholder: '',
        language: {
            noResults: function () {
                return window.i18next.t(`Resources.Global.Forms.NoRes`);
            },
        },
        ajax: {
            url: `${host}/api/Clients/Select`,
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            processResults: function (response) {
                var results;
                results = response.model.map((item) => {
                    return {
                        id: item.id,
                        text: item.text,
                    };
                });
                return { results };
            },
        },
    });
};

const selectDoctorsGetData = (id) => {
    $(`#${id}`).select2({
        allowClear: true,
        placeholder: '',
        language: {
            noResults: function () {
                return window.i18next.t(`Resources.Global.Forms.NoRes`);
            },
        },
        ajax: {
            url: `${host}/api/Doctors/Select`,
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            processResults: function (response) {
                var results;
                results = response.model.map((item) => {
                    return {
                        id: item.id,
                        text: item.text,
                    };
                });
                return { results };
            },
        },
    });
};

const clearSelectData = (id) => {
    $(`#${id}`).val(null).trigger('change');

    let select2Elem = document.getElementById(`${id}`)?.nextElementSibling;
    select2Elem?.querySelector('.select2-selection__clear').remove();
};

export { selectDoctorsGetData, selectClientsGetData, clearSelectData };
