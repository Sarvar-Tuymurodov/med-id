import { getData } from '../calendar-components/get-events.js';

//TODO: Draw calendar Day Template
const dailyEventTemplate = (data) => {
    return `<tr>
            <td>
                <div class="calendar-day__actions"><span class="${
                    data.continuousSettings ? 'medid-icon-continius' : ''
                }"></span><span class="${
        data.notificationSettings?.isNotificationEventActive
            ? 'medid-icon-active-notification'
            : ''
    }"></span><span class="medid-icon-urgent"></span><span class="medid-icon-important"></span></div>
            </td>
            <td>
                <div class="calendar-day__client"><span class="calendar-day__client--name">${
                    data?.patient?.pacientName
                }</span>
                    <div class="calendar-day__client--phone"> <a href="tel:+998998856545">+998 99 885 65 45</a><a class="call-to-client-btn" href="JavaScript:void(0)"><span class="medid-icon-PhoneNumber"> </span></a></div>
                </div>

            </td>
            <td>
                <div class="calendar-day__doctor"><span class="calendar-day__doctor--name">${
                    data?.doctor.doctorName
                }</span>
                    <div class="calendar-day__doctor--time"> <span>17:00 - 18:00</span></div>
                </div>
            </td>
            <td>
                <div class="calendar-day__comment"> <>${
                    data.eventComment
                }</ span></div>
            </td>
        </tr>`;
};

//TODO: Draw calendar Day Events
const drawCalendarDay = async () => {
    let errStatus = await getData();
    const daiyEvents = calendarSettings.day.records.records;

    if (errStatus === 404 || errStatus === 400) {
        document.getElementById('calendarDayTbody').innerHTML =
            '<h4>Ma`lumotlarni olishda muammo yuz berdi!</h4> ';
        return;
    }

    if (!(daiyEvents.length > 0)) {
        document.getElementById('calendarDayTbody').innerHTML =
            '<h4>Ko`rsatilgan kunda hodisalar topilmadi!</h4> ';
        return;
    }

    document.getElementById('calendarDayTbody').innerHTML = '';
    daiyEvents.map((event) => {
        if (
            moment(calendarSettings.day.period.dateOfStart).unix() <=
                moment(event.eventStartDateTime).unix() &&
            moment(calendarSettings.day.period.dateOfEnd).unix() >=
                moment(event.eventStartDateTime).unix()
        ) {
            document
                .getElementById('calendarDayTbody')
                .insertAdjacentHTML('beforeend', dailyEventTemplate(event));
        }
    });
};

export { drawCalendarDay };
