export const navActions = () => {
  const notificationIcon = document.getElementById('nav-notificationIcon');
  const userSettings = document.getElementById('nav-userSettings');
  const langSettings = document.getElementById('nav-lang');

  //TODO NAV LANUAGE
  const langList = document.getElementById('nav-lang--lang-list');
  const langText = document.getElementById('nav-lang-current-lang__text');

  function initLang() {
    let langItems = Array.from(langList.getElementsByClassName('lang-item'));

    langItems.forEach(f => {
      f.addEventListener('click', function (e) {
        /*** Logic to change lang ***/
        var parent = f === e.target ? e.target : e.target.parentElement;
        let currentLang = parent.getAttribute('data-value');
        langText.innerHTML = currentLang;
        langText.setAttribute('data-active-lang', currentLang);

        langItems.forEach(f => f.classList.remove('selected'));
        parent.classList.add('selected');

        setTimeout(function () {
          langList.classList.remove('active');
          langSettings.classList.remove('active', 'child-showed');
        }, 10);
      });
    });
  }

  langSettings.addEventListener('click', function (e) {
    notificationIcon.classList.remove('active');
    addNewNotification.classList.remove('deactivated');
    userSettings.classList.remove('active');
    //navNotificationList.classList.remove("active");
    setTimeout(function () {
      langSettings.classList.contains('active')
        ? langSettings.classList.remove('active', 'child-showed')
        : langSettings.classList.add('active', 'child-showed');
      langList.classList.contains('active')
        ? langList.classList.remove('active')
        : langList.classList.add('active');
    }, 50);
    e.preventDefault();
  });

  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }

  //TODO NAV NOTIFICATION
  const addNewNotification = document.getElementById('nav-notificationAddNew');
  const navNotificationList = document.getElementById('nav-notification-list');
  const tooltip = ``;

  notificationIcon.addEventListener('click', function () {
    userSettings.classList.remove('active');
    langSettings.classList.remove('active');

    notificationIcon.classList.contains('active')
      ? (notificationIcon.classList.remove('active'),
        addNewNotification.classList.remove('deactivated'))
      : (notificationIcon.classList.add('active'),
        addNewNotification.classList.add('deactivated'));
    setTimeout(function () {
      notificationIcon.classList.contains('active')
        ? navNotificationList.classList.add('active')
        : navNotificationList.classList.remove('active');
    }, 100);
  });

  addNewNotification.addEventListener('click', function () {
    userSettings.classList.remove('active');
    langSettings.classList.remove('active');
    if (notificationIcon.classList.contains('active')) {
      notificationIcon.classList.remove('active');
      addNewNotification.classList.remove('deactivated');
    }
  });

  notificationIcon.addEventListener('mouseleave', function () {});

  notificationIcon.addEventListener('mouseover', function () {});

  //TODO NAV USERS
  const burger = document.getElementById('nav-burger');

  userSettings.addEventListener('click', function () {
    notificationIcon.classList.remove('active');
    addNewNotification.classList.remove('deactivated');
    langSettings.classList.remove('active');

    userSettings.classList.contains('active')
      ? userSettings.classList.remove('active')
      : userSettings.classList.add('active');
  });

  burger.addEventListener('click', function () {
    burger.classList.contains('open')
      ? burger.classList.remove('open')
      : burger.classList.add('open');
  });
};
