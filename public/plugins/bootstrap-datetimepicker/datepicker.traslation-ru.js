$('.pickadate-translations-ru').each(function() {
    $(this).pickadate({
        format: 'dd.mm.yyyy',
        formatSubmit: 'dd.mm.yyyy',
        labelMonthNext: 'След месяц',
        labelMonthPrev: 'Пред месяц',
        labelMonthSelect: 'Выбр. месяц',
        labelYearSelect: 'Выбр. год',
        min: new Date(1930, 1, 1),
        max: new Date(2050, 12, 31),
        selectMonths: true,
        selectYears: true,
        monthsFull: [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август',
            'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        monthsShort: [
            'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя',
            'Дек'
        ],
        weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        firstDay: 1,
        today: '',
        clear: 'Закрыть',
        close: '',
        onStart: function() {
            var x = $(this.$node)[0].defaultValue;
            this.set('select',
                moment(x, "DD.MM.YYYY").format('DD/MM/YYYY'),
                { format: 'dd.mm.yyyy' });
        }
    });
});

$('.pickadate-dateOfBirth-ru').each(function () {
    $(this).pickadate({
        format: 'dd.mm.yyyy',
        formatSubmit: 'dd.mm.yyyy',
        labelMonthNext: 'След месяц',
        labelMonthPrev: 'Пред месяц',
        labelMonthSelect: 'Выбр. месяц',
        labelYearSelect: 'Выбр. год',
        min: new Date(1930, 1, 1),
        max: new Date(2050, 12, 31),
        selectMonths: true,
        selectYears: true,
        monthsFull: [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август',
            'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        monthsShort: [
            'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя',
            'Дек'
        ],
        weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        firstDay: 1,
        today: '',
        clear: 'Закрыть',
        close: '',
        onStart: function () {
            var x = $(this.$node)[0].defaultValue;
            this.set('select',
                moment(x, "DD.MM.YYYY").format('DD/MM/YYYY'),
                { format: 'dd.mm.yyyy' });
        }
    });
});