import { generateTableSkeleton } from './components/skeleton/skeleton.js';
import { modalComponent } from './components/modal/modal.js';
$(document).ready(() => {
    $('#serviceListTable').DataTable({
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
            "<'dt__bottom'<'dt__pages-count '><'dt__pagination'>>",
        ajax: {
            beforeSend: function (xhr) {
                generateTableSkeleton('serviceListTable', 14, 4);
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
                width: '55%',
                mRender: function (data, type, full, index) {
                    return `
                        <div class="doctor-table__status">
                            Лечение пульпита II степени
                        </div>`;
                },
            },
            {
                data: 'isBirthDay',
                width: '15%',
                mRender: function (data, type, full, index) {
                    return `
                    <div class="doctor-table__info">
                        30 мин
                    </div>`;
                },
            },
            {
                data: 'isBirthDay',
                width: '25%',
                mRender: function (data, type, full, index) {
                    return `<div class="doctor-table__direction">
                        120 000
                    </div>`;
                },
            },
            {
                data: 'isBirthDay',
                width: '5%',
                mRender: function (data, type, full, index) {
                    return `<div class="doctor-table__event">
                    </div>`;
                },
            },
        ],
        drawCallback: function () {
            // this.api.columns.adjust();
            $('#addServiceBtn').remove();
            $(`#${this.attr('id')}_wrapper .dt__top--left`).html(
                `<h3 class="service__table--title">Все услуги</h3>
                <h4 class="service__table--category">Диагностика</h4>`,
            );
            $(`#${this.attr('id')}_filter input`).addClass(
                'input-custom-search',
            );

            $(`#${this.attr('id')}_filter`).append(
                `<button class="btn-blue square-btn" data-modal-target="#addService" id="addServiceBtn"><i class="medid-icon-add"></i></button>`,
            );
        },
        initComplete: function (settings, json) {
            modalComponent();
        },
    });
});
