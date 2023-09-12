import { tabComponent } from './components/tab-component/tab-component.js';
tabComponent();

let childTooth = document.getElementById('checkBoxChildCard');
childTooth.addEventListener('change', function (e) {
    if (e.currentTarget.checked) {
    }
    document.querySelectorAll('.teeth-table__group').forEach((group, index) => {
        console.log(group.childNodes[0], index);
        for (let i = 0; i < 3; i++) {
            let teeths = group.querySelectorAll('.teeth-table__content');
            if (index % 2)
                teeths[teeths.length - (i + 1)].classList.toggle('hide');
            else {
                teeths[i].classList.toggle('hide');
            }
        }
    });
});
