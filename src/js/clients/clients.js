import { generateTableSkeleton } from '../components/skeleton/skeleton.js';

export const clientsDataTable = () => {
    $(document).ready(() => {
        $('#clientsDataTable').DataTable({
            select: false,
            destroy: true,
            language: { search: '' },
            ordering: false,
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
                    // generateTableSkeleton('clientsDataTable', 14, 3);
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
                    data: 'name',
                    width: '32%',
                    mRender: function (data, type, full, index) {
                        return `<div class="client-datatable__info">
                                <span class="client-datatable__info--name">${data}</span>
                                    <span class="client-datatable__info--birthday
                                    ">${moment(full.dayOfBirth).format(
                                        'DD.MM.YYYY',
                                    )}</span>
                                    <div class="client-datatable__actions"><span class="medid-icon-continius"></span><span class="medid-icon-active-notification"></span><span class="medid-icon-urgent"></span><span class="medid-icon-important"></span></div>
                                    </div>`;
                    },
                },
                {
                    data: 'isBirthDay',
                    width: '15%',
                    mRender: function (data, type, full, index) {
                        return `<div class="client-datatable__check">
                                    <div class="client-datatable__bill">285 000</div>
                                    <a href="tel:+998998856545" class="client-datatable__info--phone">${full.contactPhone}</a>
                                </div>`;
                    },
                },
                {
                    data: 'isBirthDay',
                    width: '40%',
                    mRender: function (data, type, full, index) {
                        return `<div class="client-datatable__event"><span class="client-datatable__event--doctor">Файзуллаев Ильхом</span>
                                    <span class="client-datatable__event--time">19 сентября 11:52</span>
                                    <span class="client-datatable__event--delay"><span class="medid-icon-time"></span> ~ 2 часа</span></div>`;
                    },
                },
            ],
            drawCallback: function () {
                // this.api.columns.adjust();
                $('#addClientDataTableBtn').remove();
                $(`#${this.attr('id')}_wrapper .dt__top--left`).append(
                    `<button class="btn-blue square-btn client-add-datatable-btn" id="addClientDataTableBtn"><i class="medid-icon-add"></i></button>`,
                );
                $(`#${this.attr('id')}_wrapper .dataTables_length`).hide();
                $('#clientsDataTable_filter input').addClass(
                    'input-custom-search',
                );
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
            },
            initComplete: function (settings, json) {},
        });
    });
};
