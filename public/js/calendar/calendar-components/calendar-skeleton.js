import {
    generateTableSkeleton,
    generateCalendarSkeleton,
    clearSkeleton,
} from '../../components/skeleton/skeleton.js';

const calendarSkeleton = (table) => {
    if (calendarSettings.month.isActive) {
        generateCalendarSkeleton('.calendar-month__day--bottom');
        return;
    }

    if (calendarSettings.week.isActive) {
        generateCalendarSkeleton('#calendarWeekTbody > tr > td');
        return;
    }

    if (calendarSettings.day.isActive) {
        generateTableSkeleton(`calendarTabPaneDay`, 14, 4);
        return;
    }

    if (calendarSettings.doctor.isActive) {
        generateCalendarSkeleton('.calendar-doctor__events');
    }
};

const calendarSkeletonClear = (table) => {
    if (calendarSettings.month.isActive) {
        clearSkeleton('.calendar-month__day--bottom');
        return;
    }

    if (calendarSettings.week.isActive) {
        clearSkeleton('#calendarWeekTbody > tr > td');
        return;
    }

    if (calendarSettings.day.isActive) {
        clearSkeleton(`#calendarTabPaneDay`, 14, 4);
        return;
    }

    if (calendarSettings.doctor.isActive) {
        clearSkeleton('.calendar-doctor__events');
    }
};

export { calendarSkeleton, calendarSkeletonClear };
