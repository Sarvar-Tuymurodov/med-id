import { getData } from '../calendar-components/get-events.js';

const clearPickedTime = () => {
    document.querySelectorAll('.calendar-doctor__hour.active').forEach((c) => {
        c.classList.remove('active', 'top', 'bottom');

        c.querySelector(
            '.calendar-doctor__hour--right span.active',
        ).classList.remove('active');

        c.querySelector('.calendar-doctor__hour--right span').classList.remove(
            'prev',
            'next',
        );
    });
};

const checkHour = () => {
    document.querySelectorAll('.calendar-doctor__hour').forEach((cell) => {
        const isToday =
            moment()
                .set({ minute: 0, hour: 0, second: 0 })
                .diff(calendarSettings.doctor.period.dateOfStart, 'days') == 0;

        let hour = cell.querySelector(
            '.calendar-doctor__hour--left span',
        ).innerHTML;
        if (moment().hour() == hour && isToday) {
            cell.classList.add('active');
        }
    });

    checkMinute();
};

const checkMinute = () => {
    const choosedTime = document.querySelector('.calendar-doctor__hour.active');

    const hourPartNow = Math.floor(moment().minute() / 15) + 1;
    const minutePartNow = choosedTime.querySelector(
        `.calendar-doctor__hour--right span:nth-child(${hourPartNow})`,
    );
    debugger;
    minutePartNow.classList.add('active');

    const next = document.querySelector(
        '.calendar-doctor__hour--right span.active',
    ).nextElementSibling;
    const prev = document.querySelector(
        '.calendar-doctor__hour--right span.active',
    ).previousElementSibling;

    next?.classList.add('next');
    prev?.classList.add('prev');

    if (hourPartNow === 4)
        document
            .querySelector('.calendar-doctor__hour.active')
            .classList.add('bottom');

    if (hourPartNow === 1)
        document
            .querySelector('.calendar-doctor__hour.active')
            .classList.add('top');
};

const msInMinute = 60000;
const period = (60 - moment().second()) * 1000;

//TODO: Draw Doctor
const drawCalendarDoctor = async () => {
    let errStatus = await getData();
    const doctorEvents = calendarSettings.doctor.records.records;

    if (errStatus === 404 || errStatus === 400) {
        document
            .querySelector('.calendar-doctor__no-events')
            .classList.add('show');
        document.getElementById('calendarDoctorNoEvents').innerHTML =
            '<h4>Ma`lumotlarni olishda muammo yuz berdi!</h4> ';
        return;
    }

    if (!(doctorEvents.length > 0)) {
        document
            .querySelector('.calendar-doctor__no-events')
            .classList.add('show');
        document.getElementById('calendarDoctorNoEvents').innerHTML =
            '<h4>Ko`rsatilgan kunda hodisalar topilmadi!</h4> ';
        return;
    }

    document
        .querySelector('.calendar-doctor__no-events')
        .classList.remove('show');

    const calendarDoctorThead = document.querySelector(
        '#calendarDoctorThead tr',
    );
    const calendarDoctorTbody = document.getElementById('calendarDoctorTbody');
    const workTimeParent = document.querySelector(
        '.calendar-doctor__left--body',
    );
    [calendarDoctorThead, calendarDoctorTbody, workTimeParent].forEach(
        (c) => (c.innerHTML = ''),
    );
    let startOfWork = 8;
    let endOfWork = 20;

    let sortByDoctor = [];
    let getAllId = doctorEvents
        .map((c) => {
            return c.doctor.doctorId;
        })
        .reduce((acc, curr) => {
            if (!acc.includes(curr)) acc.push(curr);
            return acc;
        }, []);

    for (let obj of getAllId) {
        let docEvent = doctorEvents.filter((c) => c.doctor.doctorId == obj);
        sortByDoctor.push(docEvent);
    }

    sortByDoctor.forEach((arr) => {
        calendarDoctorThead.insertAdjacentHTML(
            'beforeend',
            `<th>${arr[0].doctor.doctorName
                .split(' ')
                .slice(0, 2)
                .join(' ')}</th>`,
        );
    });

    for (let i = startOfWork; i < endOfWork; i++) {
        workTimeParent.insertAdjacentHTML(
            'beforeend',
            `<div class="calendar-doctor__hour"> 
                    <div class="calendar-doctor__hour--left "><span>${(
                        i + ''
                    ).padStart(2, '0')}</span></div>
                    <div class="calendar-doctor__hour--right"><span><p>00</p></span><span><p>15</p></span><span><p>30</p></span><span><p>45</p></span></div>
                </div>`,
        );
    }

    for (let i = startOfWork; i < endOfWork; i += 0.25) {
        const tr = document.createElement('tr');
        getAllId.forEach((doc) =>
            tr.insertAdjacentHTML(
                'beforeend',
                `<td>
                        <div class="calendar-doctor__events">
                            <span class="calendar-doctor__events-tag"></span>
                            <p class="calendar-doctor__events-name"></p>
                            <input type="hidden" class="doctor-date" value="${moment(
                                calendarSettings.doctor.period.dateOfStart,
                            )
                                .set({
                                    hour: Math.trunc(i),
                                    minute: (i % 1) * 60,
                                })
                                .format()}"/>
                            <input class="doctor-id" type="hidden" value="${doc}"/>
                        </div>
                    </td>`,
            ),
        );
        calendarDoctorTbody.append(tr);
    }

    const doctorEventCell = calendarDoctorTbody.querySelectorAll('td');
    doctorEventCell.forEach((cell) => {
        const date = cell.querySelector('input.doctor-date').value;
        const id = cell.querySelector('input.doctor-id').value;

        let doctorEvents = sortByDoctor.find((arr) => {
            if (arr[0].doctor.doctorId === id) return arr;
        });

        doctorEvents.forEach((event) => {
            if (
                Math.abs(
                    moment(event.eventStartDateTime).unix() -
                        moment(date).unix(),
                ) < 300
            ) {
                const duration = moment(event.eventEndDateTime).diff(
                    moment(event.eventStartDateTime),
                    'minute',
                );
                const pacientName = cell.querySelector(
                    '.calendar-doctor__events-name',
                );
                const pacientTag = cell.querySelector(
                    '.calendar-doctor__events-tag',
                );
                const cellRow = Math.round(duration / 15);
                let element = cell.parentNode.nextElementSibling;
                const indexOfCell = Array.from(
                    cell.parentNode.children,
                ).indexOf(cell);

                cell.setAttribute('rowspan', `${cellRow}`);

                for (let i = 0; i < cellRow - 1; i++) {
                    element.childNodes[indexOfCell].remove();
                    element = element.nextElementSibling;
                }
                pacientName.innerHTML = `${event.patient.pacientName}`;
                pacientTag.style.display = 'inline-block';

                // childElement.style.height = cell.clientHeight;
            }
        });
    });

    checkHour();
    setTimeout(function () {
        setInterval(function intervalMin() {
            clearPickedTime();
            checkHour();
            checkMinute();
        }, msInMinute);
    }, period);
};

const s1 = document.querySelector('.calendar-doctor__left--body');
const s2 = document.querySelector('.calendar-doctor__tbody');

function select_scroll_1(e) {
    s2.scrollTop = s1.scrollTop;
}
function select_scroll_2(e) {
    s1.scrollTop = s2.scrollTop;
}

s1.addEventListener('scroll', select_scroll_1, false);
s2.addEventListener('scroll', select_scroll_2, false);

export { drawCalendarDoctor };
