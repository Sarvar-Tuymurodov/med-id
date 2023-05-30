const generateTableSkeleton = function (tableName, rows, columns) {
    let html = '';
    for (let i = 0; i < rows; i++) {
        html += '<tr class="crsr-nt-allwd">';
        for (let j = 0; j < columns; j++)
            html += '<td><div class="placeholder-item"></div></td>';
        html += '</tr>';
    }
    $(`#${tableName} tbody`).empty().append(html);
};

const generateCalendarSkeleton = function (className) {
    document.querySelectorAll(`${className}`).forEach((div) => {
        let placeholder = document.createElement('div');
        placeholder.classList.add('skeleton-placeholder');
        placeholder.innerHTML =
            '<div class="skeleton-placeholer-animation"></div>';
        div.style.position = 'relative';
        // div.innerHTML = '';
        div.insertAdjacentElement('beforeend', placeholder);
    });
};

const clearSkeleton = function (className) {
    document.querySelectorAll(`${className}`).forEach((div) => {
        div.querySelector('.skeleton-placeholder')?.remove();
        div.style.removeProperty('position');
    });
};

export { generateTableSkeleton, generateCalendarSkeleton, clearSkeleton };
