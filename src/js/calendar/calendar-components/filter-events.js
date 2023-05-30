import { drawOnlyEvents } from '../calendar.js';
import {
    selectClientsGetData,
    selectDoctorsGetData,
    clearSelectData,
} from '../../components/select2/select2-type.js';

const initFilterActions = () => {
    $('#filterEventByTime').daterangepicker({
        timePicker: true,
        startDate: moment().startOf('hour').set({ hours: 8 }),
        endDate: moment().startOf('hour').add(32, 'hour').set({ hours: 18 }),
        showDropdowns: false,
        timePicker24Hour: true,
        locale: {
            format: 'DD.MM.YYYY ',
            // applyLabel: window.i18next.t('Resources.Global.Btns.Accept'),
            // cancelLabel: window.i18next.t('Resources.Global.Btns.Close'),
            monthNames: moment.monthsShort().map((f) => f.toLowerCase()),
            daysOfWeek: moment.weekdaysShort().map((f) => f.toLowerCase()),
        },
    });

    selectClientsGetData('filterEventByPacient');
    selectDoctorsGetData('filterEventByDoctor');

    const isImportant = document.getElementById('filterEventIsImportant');
    const isFlash = document.getElementById('filterEventIsFlash');
    const isNotify = document.getElementById('filterEventIsNotify');
    const isContinius = document.getElementById('filterEventIsContinius');
    const isRepeat = document.getElementById('filterEventIsRepeat');

    [(isImportant, isFlash, isNotify, isContinius, isRepeat)].forEach((c) =>
        c.addEventListener('click', function (e) {
            this.classList.toggle('active');
        }),
    );
};

const applyFormFilterEvent = () => {
    const applyFormFilter = document.getElementById('applyFilterForm');

    applyFormFilter.addEventListener('click', function (e) {
        calendarFilter.filter.pacient.id = $('#filterEventByPacient').select2(
            'data',
        )[0]?.id;
        calendarFilter.filter.doctor.id = $('#filterEventByDoctor').select2(
            'data',
        )[0]?.id;

        calendarFilter.filter.period.dateOfStart = moment(
            $('#filterEventByTime').data('daterangepicker').startDate,
        ).format();
        calendarFilter.filter.period.dateOfEnd = moment(
            $('#filterEventByTime').data('daterangepicker').endDate,
        ).format();

        calendarFilter.isFiltered = true;

        for (let item in calendarSettings) {
            calendarSettings[item].isActive === true
                ? (calendarSettings[item].init = true)
                : (calendarSettings[item].init = false);
        }

        document.getElementById('filterCalendarBtn').classList.add('active');
        document.getElementById('clearFilterBtn').classList.add('show');
        drawOnlyEvents();
    });
};

const clearFilter = () => {
    const clearBtn = document.getElementById('clearFilterBtn');

    clearBtn.addEventListener('click', function (e) {
        this.classList.remove('show');
        document.getElementById('filterCalendarBtn').classList.remove('active');

        calendarFilter.isFiltered = false;
        drawOnlyEvents();

        clearSelectData('filterEventByDoctor');
        clearSelectData('filterEventByPacient');
    });
};

const searchEvents = () => {
    const searchInput = document.getElementById('searchFilterInput');

    searchInput.addEventListener('keydown', function () {
        if (this.value.length > 3) {
            calendarFilter.word = this.value;
            drawOnlyEvents();
        }
    });
};

export const filterCalendarEvents = () => {
    searchEvents();
    initFilterActions();
    applyFormFilterEvent();
    clearFilter();
};
