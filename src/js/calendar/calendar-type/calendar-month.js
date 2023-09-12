import { getData } from '../calendar-components/get-events.js';

//TODO: Day template for month
const dayTamplate = (someClass, day) => {
    return `
    <td class="active">
        <div class="calendar-month__day ${someClass}">
        <div class="calendar-month__day--top">
            <div class="calendar-month__date">${day}</div>
            <div class="calendar-month__actions">
                <span class="medid-icon-continius"></span>
                <span class="medid-icon-active-notification"></span>
                <span class="medid-icon-Urgent"></span>
                <span class="medid-icon-Important"></span>
            </div>
        </div>
        <div class="calendar-month__day--bottom"><span class="calendar-month__events-count"></span><span class="calendar-month__events-text"></span></div>
        </div>
       </td>`;
};

//TODO: Draw Calendar Month Body
const drawCalendarMonth = () => {
    const startOfMonth = calendarSettings.month.period.dateOfStart;
    const endOfMonth = calendarSettings.month.period.dateOfEnd;
    const firstDayIndex =
        moment(startOfMonth).day() === 0 ? 7 : moment(startOfMonth).day();
    const lastDayIndex = moment(endOfMonth).day();
    const lastMonthLastDate = moment(startOfMonth)
        .subtract(1, 'month')
        .daysInMonth();
    const nowMonthLastDate = moment(startOfMonth).daysInMonth();
    const nextdaysLength = 7 - lastDayIndex === 7 ? 0 : 7 - lastDayIndex;
    let days = '';

    for (let i = firstDayIndex - 1; i > 0; i--) {
        days += `<td>
            <div class="calendar-month__day prev-month">
                <div class="calendar-month__day--top">
                    <div class="calendar-month__date">${
                        lastMonthLastDate - i + 1
                    }</div>
                </div>
            </div>
        </td>`;
    }

    for (let j = 1; j <= nowMonthLastDate; j++) {
        if (moment(startOfMonth).set('date', j).isSame(moment(), 'day')) {
            days += dayTamplate('is-today', j);
        } else if (
            moment(startOfMonth).set('date', j).unix() < +moment().unix()
        ) {
            days += dayTamplate('passed', j);
        } else {
            days += dayTamplate('', j);
        }
    }

    for (let k = 1; k <= nextdaysLength; k++) {
        days += `<td>
            <div class="calendar-month__day prev-month">
                <div class="calendar-month__day--top">
                    <div class="calendar-month__date">${k}</div>
                </div>
            </div>
        </td>`;
    }

    document.getElementById('calendarMonthDays').innerHTML = days;
};

const removeDayBottom = () => {
    document
        .querySelectorAll(
            '#calendarTabPaneMonth table tbody td.active .calendar-month__day--bottom',
        )
        .forEach((c) => c.classList.add('hide'));
};

//TODO: Draw Calendar Month Events
const calendarMonthEvents = async () => {
    let errStatus = await getData();

    if (errStatus === 404 || errStatus === 400) {
        removeDayBottom();
        return;
    }

    if (!(calendarSettings.month.records.records.length > 0)) {
        removeDayBottom();
        return;
    }

    const generatedDate = moment(calendarSettings.month.period.dateOfStart).set(
        {
            minute: 0,
            hour: 0,
        },
    );

    const daysInMonth = document.querySelectorAll(
        '#calendarTabPaneMonth table tbody td.active',
    );

    daysInMonth.forEach((day, index) => {
        const date = +day.querySelector('.calendar-month__date').textContent;
        const calendarDay = generatedDate.set({ date: date });

        const continius = day.querySelector('.med-id-continius');
        const notifActive = day.querySelector(
            '.medid-icon-active-notification',
        );
        const isFast = day.querySelector('.medid-icon-urgent');
        const isImportant = day.querySelector('.medid-icon-important');

        let eventCounter = 0;

        //TODO: CLEAR ALL DATA
        day.querySelector('.calendar-month__day--bottom').classList.add('hide');
        [continius, notifActive, isFast, isImportant].forEach((c) =>
            c?.classList.remove('active'),
        );

        calendarSettings.month.records.records.map((event) => {
            if (
                +calendarDay.diff(moment(event.eventStartDateTime), 'days') ===
                0
            ) {
                eventCounter++;

                event.continuousSettings
                    ? continius?.classList.add('active')
                    : event.notificationSettings?.isNotificationEventActive
                    ? notifActive?.classList.add('active')
                    : event.isEmercyEvent
                    ? isFast?.classList.add('active')
                    : event.isMandatoryEvent
                    ? isImportant?.classList.add('active')
                    : void 0;
            }
        });

        if (eventCounter > 0) {
            day.querySelector('.calendar-month__events-count').innerHTML =
                eventCounter;
            day.querySelector('.calendar-month__events-text').setAttribute(
                'data-i18n',
                'Resources.Calendar.Month.Events',
            );

            day.querySelector('.calendar-month__day--bottom').classList.remove(
                'hide',
            );
        }
    });

    $('.calendar-block__month').localize();
};

export { drawCalendarMonth, calendarMonthEvents };
