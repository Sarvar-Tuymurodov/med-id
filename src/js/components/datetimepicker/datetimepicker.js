const timePicker = (
    inputId,
    hour = moment().hour(),
    minute = moment().minute(),
) => {
    $(`#${inputId}`).datetimepicker({
        format: 'HH:mm',
        // locale: `${Cookies.get('_culture')}`,
        date: moment().format('DD.MM.YYYY'),
    });

    $(`#${inputId}`)
        .data('DateTimePicker')
        .date(
            moment()
                .set({
                    hour: hour,
                    minute: minute,
                })
                .format('HH:mm'),
        );
};

const datePicker = (inputId, data = moment().format()) => {
    $(`#${inputId}`).datetimepicker({
        format: 'DD.MM.YYYY',
        // locale: `${Cookies.get('_culture')}`,
        date: moment().format('DD.MM.YYYY'),
    });
    $(`#${inputId}`)
        .data('DateTimePicker')
        .date(moment(data).format('DD.MM.YYYY'));
};

export { timePicker, datePicker };
