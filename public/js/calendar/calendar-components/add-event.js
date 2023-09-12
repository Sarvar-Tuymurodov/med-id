import {
    selectClientsGetData,
    selectDoctorsGetData,
} from '../../components/select2/select2-type.js';
import {
    timePicker,
    datePicker,
} from '../../components/datetimepicker/datetimepicker.js';

export const addEvent = function () {
    $('#addEventYtpe').select2({
        tags: 'true',
    });

    selectDoctorsGetData('addEventDoctor');
    selectClientsGetData('addEventPacient');

    datePicker('addEventDate');
    timePicker('addEventTimeFrom');
    timePicker('addEventTimeTo', Number(moment().hour() + 1));

    document
        .getElementById('addEventDoctorBtn')
        .addEventListener('click', function () {
            document
                .querySelector('.add-event__doctor-form')
                .classList.add('show');
            this.classList.add('hide');
        });

    document
        .getElementById('addEventPacientBtn')
        .addEventListener('click', function () {
            document
                .querySelector('.add-event__pacient-form')
                .classList.add('show');
            this.classList.add('hide');
        });

    const isImportant = document.getElementById('addEventIsImportant');
    const isFlash = document.getElementById('addEventIsFlash');
    const isNotify = document.getElementById('addEventIsNotify');
    const isContinius = document.getElementById('addEventIsContinius');
    const isRepeat = document.getElementById('addEventIsRepeat');

    [isImportant, isFlash, isNotify, isContinius, isRepeat].forEach((c) =>
        c.addEventListener('click', function (e) {
            this.classList.toggle('active');
        }),
    );
};
