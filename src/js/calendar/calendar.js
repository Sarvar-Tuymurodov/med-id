import {
    drawCalendarMonth,
    calendarMonthEvents,
} from './calendar-type/calendar-month.js';
import {
    drawCalendarWeek,
    calendarWeekEvents,
} from './calendar-type/calendar-week.js';
import { drawCalendarDay } from './calendar-type/calendar-day.js';
import { drawCalendarDoctor } from './calendar-type/calendar-doctor.js';
import { nextPeriodCalendar } from './calendar-components/calendar-next-date.js';
import { prevPeriodCalendar } from './calendar-components/calendar-prev-date.js';
import { drawCalendarHeadDate } from './calendar-components/calendar-head-date.js';
import { filterCalendarEvents } from './calendar-components/filter-events.js';
import { addEvent } from './calendar-components/add-event.js';
import { addListenerBackNow } from './calendar-components/calendar-back-to-now.js';

filterCalendarEvents();
addEvent();

window.calendarSettings = {
    month: {
        typeOfCalendar: 'month',
        isActive: false,
        init: false,
        period: {
            dateOfStart: '',
            dateOfEnd: '',
        },
        records: {
            records: [],
            totalRecords: 0,
            filteredRecords: 0,
        },
    },
    week: {
        typeOfCalendar: 'week',
        isActive: false,
        init: false,
        period: {
            dateOfStart: '',
            dateOfEnd: '',
        },
        records: {
            records: [],
            totalRecords: 0,
            filteredRecords: 0,
        },
    },
    day: {
        typeOfCalendar: 'day',
        isActive: false,
        init: false,
        period: {
            dateOfStart: '',
            dateOfEnd: '',
        },
        records: {
            records: [],
            totalRecords: 0,
            filteredRecords: 0,
        },
    },
    doctor: {
        typeOfCalendar: 'doctor',
        isActive: false,
        init: false,
        period: {
            dateOfStart: '',
            dateOfEnd: '',
        },
        records: {
            records: [],
            totalRecords: 0,
            filteredRecords: 0,
        },
    },
};

window.calendarFilter = {
    isFiltered: false,
    isSearched: false,
    filter: {
        period: {
            dateOfStart: '',
            dateOfEnd: '',
        },
        doctor: { id: null },
        pacient: { id: null },
        word: '',
    },
};

const initCalendar = () => {
    calendarSettings.month.isActive = true;
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
    drawCalendarMonth();
    calendarMonthEvents();
    drawCalendarHeadDate();

    calendarSettings.week.period = {
        dateOfStart: moment().set({ hour: 0, minute: 0 }).format(),
        dateOfEnd: moment()
            .set({ hour: 23, minute: 59 })
            .add(6, 'day')
            .format(),
    };

    [calendarSettings.day.period, calendarSettings.doctor.period].forEach(
        (c) => {
            c.dateOfStart = moment().set({ hour: 0, minute: 0 }).format();
            c.dateOfEnd = moment().set({ hour: 23, minute: 59 }).format();
        },
    );
};

const drawCalendar = () => {
    if (calendarSettings.month.isActive) {
        drawCalendarMonth();
        calendarMonthEvents();
        return;
    }

    if (calendarSettings.week.isActive) {
        drawCalendarWeek();
        calendarWeekEvents();
        return;
    }

    if (calendarSettings.day.isActive) {
        drawCalendarDay();
        return;
    }

    if (calendarSettings.doctor.isActive) {
        drawCalendarDoctor();
    }
};

const drawOnlyEvents = () => {
    if (calendarSettings.month.isActive) {
        calendarMonthEvents();
        return;
    }

    if (calendarSettings.week.isActive) {
        calendarWeekEvents();
        return;
    }

    if (calendarSettings.day.isActive) {
        drawCalendarDay();
        return;
    }

    if (calendarSettings.doctor.isActive) {
        drawCalendarDoctor();
    }
};

const findActiveCalendarType = (type) => {
    for (let item in calendarSettings) {
        calendarSettings[item].typeOfCalendar === type
            ? (calendarSettings[item].isActive = true)
            : (calendarSettings[item].isActive = false);
    }
    drawCalendarHeadDate();
};

//TODO: EventListeners Section

//TODO: NEXT OR PREV DATE CHANGE

document.addEventListener('readystatechange', (event) => {
    initCalendar();

    document
        .getElementById('gotoPrevCalendar')
        .addEventListener('click', () => {
            prevPeriodCalendar();
            drawCalendarHeadDate();
        });

    document
        .getElementById('gotoNextCalendar')
        .addEventListener('click', () => {
            nextPeriodCalendar();
            drawCalendarHeadDate();
        });

    //TODO: Do Active Month,Wekk,Day
    document
        .getElementById('calendarTabDoctors')
        .addEventListener('click', () => {
            if (!calendarSettings.doctor.isActive) {
                findActiveCalendarType('doctor');

                if (!calendarSettings.doctor.init) drawCalendar();
            }
        });

    document
        .getElementById('calendarTabMonthBtn')
        .addEventListener('click', () => {
            if (!calendarSettings.month.isActive) {
                findActiveCalendarType('month');

                if (!calendarSettings.month.init) drawCalendar();
            }
        });

    document
        .getElementById('calendarTabWeekBtn')
        .addEventListener('click', () => {
            if (!calendarSettings.week.isActive) {
                findActiveCalendarType('week');

                if (!calendarSettings.week.init) drawCalendar();
                calendarSettings.week.init = true;
            }
        });

    document
        .getElementById('calendarTabDayBtn')
        .addEventListener('click', () => {
            if (!calendarSettings.day.isActive) {
                findActiveCalendarType('day');

                if (!calendarSettings.day.init) drawCalendar();
                calendarSettings.day.init = true;
            }
        });

    addListenerBackNow();
});

export { drawCalendar, drawOnlyEvents };
