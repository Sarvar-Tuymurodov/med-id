import { generateTableSkeleton } from './components/skeleton/skeleton.js';

$(document).ready(() => {
    $('#doctorsTable').DataTable({
        select: false,
        destroy: true,
        scrollY: '420px',
        scrollCollapse: true,
        paging: false,
        language: { search: '' },
        lengthMenu: [
            [7, 50, 100],
            [7, 50, 100],
        ],
        pagingType: 'simple',
        dom:
            "<'dt__top'<'dt__top--left'l><'dt__top--filter'f> >" +
            "<'dt__body'tr>" +
            "<'dt__bottom'<'dt__pages-count 'i><'dt__pagination'p>>",
        ajax: {
            beforeSend: function (xhr) {
                generateTableSkeleton('doctorsTable', 14, 5);
            },
            url: `${host}/api/Clients`,
            method: 'GET',
            dataSrc: 'model',
            headers: {
                Accept: 'application/json',
            },
        },
        columns: [
            {
                data: 'isBirthDay',
                width: '13%',
                mRender: function (data, type, full, index) {
                    return `
                        <div class="doctor-table__status">
                            <div class="doctor-table__status--text">Уволен</div>
                            <div class="doctor-table__status--img"><img src="../img/doctor-data-table-img.png"/></div>
                        </div>`;
                },
            },
            {
                data: 'isBirthDay',
                width: '20%',
                mRender: function (data, type, full, index) {
                    return `
                    <div class="doctor-table__info">
                        <div class="doctor-table__info--name">Файзуллаев Ильхом</div>
                        <div class="doctor-table__info--phone"><a href="tel:">+998 99 885 65 45</a><span class="medid-icon-phone-number"></span></div>
                    </div>`;
                },
            },
            {
                data: 'isBirthDay',
                width: '20%',
                mRender: function (data, type, full, index) {
                    return `<div class="doctor-table__direction">Ортопед, Терапевт</div>`;
                },
            },
            {
                data: 'isBirthDay',
                width: '40%',
                mRender: function (data, type, full, index) {
                    return `<div class="doctor-table__event">
                        <div class="doctor-table__date"><span class="medid-icon-month"></span><div class="doctor-table__date-start">Пн</div>-<div class="doctor-table__date-end">Пт</div></div>
                        <div class="doctor-table__time"><span class="medid-icon-time"></span><div class="doctor-table__time-start">9:00</div>-<div class="doctor-table__time-end">18:00</div></div>
                    </div>`;
                },
            },
            {
                data: 'isBirthDay',
                width: '7%',
                mRender: function (data, type, full, index) {
                    return `<div class="doctor-table__edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.5129 4.63321L4.19535 14.4955C3.84354 14.87 3.50307 15.6077 3.43497 16.1184L3.01506 19.7955C2.86752 21.1233 3.82084 22.0312 5.13732 21.8042L8.79169 21.18C9.3024 21.0892 10.0174 20.7147 10.3692 20.3289L19.6867 10.4666C21.2983 8.76424 22.0246 6.82357 19.5165 4.45163C17.0197 2.10239 15.1244 2.93087 13.5129 4.63321Z" stroke="#4362EE" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.957 6.27881C12.445 9.41113 14.9872 11.8058 18.1422 12.1235" stroke="#4362EE" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>`;
                },
            },
        ],
        drawCallback: function () {
            // this.api.columns.adjust();
            $('#addDoctor').remove();
            $(`#${this.attr('id')}_wrapper .dt__top--left`).append(
                `<button class="btn-blue square-btn client-add-datatable-btn" id="addDoctor"><i class="medid-icon-add"></i></button>`,
            );
            $(`#${this.attr('id')}_wrapper .dataTables_length`).hide();
            $(
                `#${this.attr(
                    'id',
                )}_wrapper .dataTables_paginate .paginate_button.previous`,
            ).html(`<span class="medid-icon-chevron-left"></span>`);
            $(
                `#${this.attr(
                    'id',
                )}_wrapper .dataTables_paginate .paginate_button.next`,
            ).html(`<span class="medid-icon-chevron-right"></span>`);
            $('#doctorsTable_filter input').addClass('input-custom-search');
        },
        initComplete: function (settings, json) {},
    });
});
