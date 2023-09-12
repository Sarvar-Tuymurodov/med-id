import { getData } from '../calendar-components/get-events.js';

//TODO: Draw Calendar Week Body
const drawCalendarWeek = () => {
    const startOfWeek = calendarSettings.week.period.dateOfStart;
    let startOfWork = 8;
    let endOfWork = 20;

    document.getElementById('calendarWeekTbody').innerHTML = '';
    document.getElementById('calendarWeekThead').innerHTML = '';

    let theadTr = document.createElement('tr');
    theadTr.innerHTML = `<th><span class="medid-icon-time"></span></th>`;

    for (let i = 0; i < 7; i++) {
        let weekDay = moment(startOfWeek).add(i, 'day').day();
        console.log(weekDay);

        theadTr.insertAdjacentHTML(
            'beforeend',
            `<th scope="col" data-i18n="Resources.Calendar.Week.Short.${weekDay}">${window.i18next.t(
                `Resources.Calendar.Week.Short.${weekDay}`,
            )}</th>`,
        );
    }

    $('.calendar-block__week').localize();

    document.getElementById('calendarWeekThead').append(theadTr);

    for (; startOfWork < endOfWork; startOfWork++) {
        let tr = document.createElement('tr');
        tr.insertAdjacentHTML(
            'afterbegin',
            `<td><div class="calendar-week__hour"><span>${startOfWork}:00</span></div></td>`,
        );

        for (let j = 0; j < 7; j++) {
            tr.insertAdjacentHTML(
                'beforeend',
                `<td>
                <div class="calendar-week__hour cell">
                    <div class="calendar-week__hour--left">
                        <div class="calendar-week__events--count">99</div>
                        <div class="calendar-week__events--text">записей</div>
                    </div>
                    <div class="calendar-week__hour--right">
                        <div class="calendar-week__actions"><span class="medid-icon-continius"></span><span class="medid-icon-active-notification"></span><span class="medid-icon-urgent"></span><span class="medid-icon-Important"></span></div>
                    </div>

                    <input type="hidden" class="week-cell-date" value="${moment(
                        startOfWeek,
                    )
                        .add(j, 'day')
                        .set({ hour: startOfWork, minute: 0, second: 0 })
                        .format()}" />
                </div>
            </td>`,
            );
        }
        document.getElementById('calendarWeekTbody').append(tr);
    }
};

//TODO: Draw Calendar Week Events
const calendarWeekEvents = async () => {
    await getData();

    if (!calendarSettings.week.records.records.length > 0) return;

    const calendarWeekCell = document.querySelectorAll(
        '#calendarTabPaneWeek table tbody td .calendar-week__hour.cell',
    );

    calendarWeekCell.forEach((cell) => {
        let cellDate = cell.querySelector('input.week-cell-date').value;
        let eventCounter = 0;
        const weekEvents = calendarSettings.week.records.records;
        const continius = cell.querySelector('.med-id-continius');
        const notifActive = cell.querySelector(
            '.medid-icon-active-notification',
        );
        const isFast = cell.querySelector('.medid-icon-Urgent');
        const isImportant = cell.querySelector('.medid-icon-Important');

        weekEvents.forEach((event) => {
            if (
                moment(event.eventStartDateTime).unix() >=
                    moment(cellDate).unix() &&
                moment(event.eventStartDateTime).unix() -
                    moment(cellDate).unix() <
                    3600
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
            cell.querySelector('.calendar-week__hour--left').classList.add(
                'show',
            );
            cell.querySelector('.calendar-week__events--text').setAttribute(
                'data-i18n',
                'Resources.Calendar.Month.Events',
            );
            cell.querySelector('.calendar-week__events--count').innerHTML =
                eventCounter;
        }
    });
};

export { drawCalendarWeek, calendarWeekEvents };
