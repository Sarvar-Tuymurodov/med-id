import { i18nextFunc } from './components/i18next/i18next.js';
import { tooltipComponent } from './components/tooltip/tooltip.js';
import { navActions } from './components/nav-actions/nav-actions.js';
import { tabComponent } from './components/tab-component/tab-component.js';
import { modalComponent } from './components/modal/modal.js';
import { clientsDataTable } from './clients/clients.js';
import { isNotInternet } from './components/error-alerts/err-alert.js';

i18nextFunc();
isNotInternet();
tooltipComponent();
navActions();
tabComponent();
clientsDataTable();
modalComponent();
