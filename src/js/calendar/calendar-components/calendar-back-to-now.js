import { drawCalendar } from '../calendar.js';
import { drawCalendarHeadDate } from './calendar-head-date.js';

const backToNow = () => {
    if (calendarSettings.month.isActive) {
        calendarSettings.month.period = {
            dateOfStart: moment()
                .startOf('month')
                .set({ hour: 0, minute: 0 })
                .format(),
            dateOfEnd: moment()
                .endOf('month')
                .set({ hour: 23, minute: 59 })
                .format(),
        };
        drawCalendar();
        return;
    }

    if (calendarSettings.week.isActive) {
        calendarSettings.week.period = {
            dateOfStart: moment().set({ hour: 0, minute: 0 }).format(),
            dateOfEnd: moment()
                .set({ hour: 23, minute: 59 })
                .add(6, 'day')
                .format(),
        };
        drawCalendar();
        return;
    }

    if (calendarSettings.day.isActive) {
        calendarSettings.day.period = {
            dateOfStart: moment().set({ hour: 0, minute: 0 }).format(),
            dateOfEnd: moment().set({ hour: 23, minute: 59 }).format(),
        };
        drawCalendar();
        return;
    }

    if (calendarSettings.doctor.isActive) {
        calendarSettings.doctor.period = {
            dateOfStart: moment().set({ hour: 0, minute: 0 }).format(),
            dateOfEnd: moment().set({ hour: 23, minute: 59 }).format(),
        };
        drawCalendar();
        return;
    }
};

const fadeBackToNowBtn = () => {
    document.getElementById('calendarBackToNow').classList.add('d-none');
};

const hideBackBtn = () => {
    fadeBackToNowBtn();
    backToNow();
    drawCalendarHeadDate();
};

const showBackBtn = () => {
    document.getElementById('calendarBackToNow').classList.remove('d-none');
    document.getElementById(
        'calendarBackToNowText',
    ).innerHTML = `${moment().date()}`;
};

const addListenerBackNow = () => {
    document
        .getElementById('calendarBackToNow')
        .addEventListener('click', hideBackBtn);
};

const getActiveCalendarTypeDate = () => {
    for (let calendar in calendarSettings) {
        if (calendarSettings[calendar].isActive)
            return calendarSettings[calendar].period.dateOfStart;
    }
};

export {
    addListenerBackNow,
    showBackBtn,
    fadeBackToNowBtn,
    getActiveCalendarTypeDate,
};
