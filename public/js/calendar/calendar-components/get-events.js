import {
    calendarSkeleton,
    calendarSkeletonClear,
} from './calendar-skeleton.js';

const getIsActiveType = () => {
    for (let item in calendarSettings) {
        if (calendarSettings[item].isActive) return calendarSettings[item];
    }
};

//TODO: Get All Events
const getEvents = async function () {
    try {
        let activeCalendarType = getIsActiveType();

        calendarSkeleton();
        const response = await fetch(`http://events.medid.local/api/Event`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                dateTimeStart: calendarFilter.isFiltered
                    ? calendarFilter.filter.period.dateOfStart
                    : activeCalendarType.period.dateOfStart,
                dateTimeEnd: calendarFilter.isFiltered
                    ? calendarFilter.filter.period.dateOfEnd
                    : activeCalendarType.period.dateOfEnd,
                contractorId: calendarFilter.isFiltered
                    ? calendarFilter.filter?.pacient?.id
                    : null,
                employeeId: calendarFilter.isFiltered
                    ? calendarFilter.filter?.doctor?.id
                    : null,
                words: calendarFilter.word,
                eventTypes: [],
            }),
        });

        if (!response.ok) {
            calendarSkeletonClear();
            return response.status;
        }

        const calendarData = await response.json();

        if (calendarData.length > 0) {
            activeCalendarType.records.records = calendarData;
        }

        setTimeout(function () {
            calendarSkeletonClear();
            return 404;
        }, 10000);

        calendarSkeletonClear();
    } catch (err) {
        calendarSkeletonClear();
        // calendarSkeletonClear();
        console.error('Has been problem in getting data ');
        console.log(err.message);
    }
};

export { getEvents as getData };
