export const tabComponent = function () {
    let tabs = document.querySelectorAll('[data-tab]');
    tabs.forEach((tab) => {
        tab.addEventListener('click', function () {
            let tabPane = document.getElementById(`${tab.dataset.tab}`);
            let tabContent = tabPane.closest('.tab-content');
            let tabList = tab.closest('.tab-list');

            if (!tabContent) return;

            tabList
                .querySelectorAll(':scope > [data-tab]')
                .forEach((c) => c.classList.remove('active'));
            tabContent.querySelectorAll(':scope > .tab-pane').forEach((c) => {
                c.classList.remove('active');
            });
            [tab, tabPane].map((c) => c.classList.add('active'));
        });
    });
};
