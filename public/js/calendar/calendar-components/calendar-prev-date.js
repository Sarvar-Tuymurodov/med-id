import { drawCalendar } from '../calendar.js';
import {
    showBackBtn,
    fadeBackToNowBtn,
    getActiveCalendarTypeDate,
} from './calendar-back-to-now.js';

//TODO: Prev Period in calendar
const prevPeriodCalendar = () => {
    const dateCalendar = getActiveCalendarTypeDate();
    if (moment().diff(dateCalendar, 'days') === 0) {
        fadeBackToNowBtn();
    }

    console.log(moment().diff(dateCalendar, 'days'));

    showBackBtn();
    if (calendarSettings.month.isActive) {
        calendarSettings.month.period.dateOfStart = moment(
            calendarSettings.month.period.dateOfStart,
        )
            .subtract(1, 'month')
            .startOf('month')
            .format();
        calendarSettings.month.period.dateOfEnd = moment(
            calendarSettings.month.period.dateOfEnd,
        )
            .subtract(1, 'month')
            .endOf('month')
            .format();
        drawCalendar();
        return;
    }

    if (calendarSettings.week.isActive) {
        calendarSettings.week.period.dateOfStart = moment(
            calendarSettings.week.period.dateOfStart,
        )
            .subtract(1, 'week')
            .format();
        calendarSettings.week.period.dateOfEnd = moment(
            calendarSettings.week.period.dateOfEnd,
        )
            .subtract(1, 'week')
            .format();
        drawCalendar();
        return;
    }

    if (calendarSettings.day.isActive) {
        calendarSettings.day.period.dateOfStart = moment(
            calendarSettings.day.period.dateOfStart,
        )
            .subtract(1, 'day')
            .format();
        calendarSettings.day.period.dateOfEnd = moment(
            calendarSettings.day.period.dateOfEnd,
        )
            .subtract(1, 'day')
            .format();
        drawCalendar();
        return;
    }

    if (calendarSettings.doctor.isActive) {
        calendarSettings.doctor.period.dateOfStart = moment(
            calendarSettings.doctor.period.dateOfStart,
        )
            .subtract(1, 'day')
            .format();
        calendarSettings.doctor.period.dateOfEnd = moment(
            calendarSettings.doctor.period.dateOfEnd,
        )
            .subtract(1, 'day')
            .format();
        drawCalendar();
    }
};

export { prevPeriodCalendar };
