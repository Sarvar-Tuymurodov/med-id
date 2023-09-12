//TODO: Draw Calendar Head Date
const drawCalendarHeadDate = () => {
    let mainDateCalendar = document.getElementById('dateRangeText');

    if (calendarSettings.month.isActive) {
        const startOfMonth = calendarSettings.month.period.dateOfStart;

        mainDateCalendar.innerHTML = window.i18next.t(
            `Resources.Calendar.Month.Full.${moment(startOfMonth).format('M')}`,
        );
        mainDateCalendar.setAttribute(
            'data-i18n',
            `Resources.Calendar.Month.Full.${moment(startOfMonth).format('M')}`,
        );
        return;
    }

    if (calendarSettings.week.isActive) {
        const startWeekFormat = moment(
            calendarSettings.week.period.dateOfStart,
        ).format('DD.MM');
        const endWeekFormat = moment(
            calendarSettings.week.period.dateOfEnd,
        ).format('DD.MM');

        mainDateCalendar.innerHTML = `${startWeekFormat} - ${endWeekFormat}`;
        return;
    }

    if (calendarSettings.day.isActive) {
        const day = calendarSettings.day.period.dateOfStart;

        mainDateCalendar.innerHTML = `${moment(day).date()} - ${moment(
            day,
        ).format('MMMM')}`;
        return;
    }

    if (calendarSettings.doctor.isActive) {
        const day = calendarSettings.doctor.period.dateOfStart;

        mainDateCalendar.innerHTML = `${moment(day).date()} - ${moment(
            day,
        ).format('MMMM')}`;
    }
};

export { drawCalendarHeadDate };
