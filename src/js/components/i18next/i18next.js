const i18nextFunc = function () {
    $(document).ready(function () {
        window.i18next.use(window.i18nextXHRBackend).init(
            {
                selectorAttr: '',
                lng: Cookies.get('_culture'),
                fallbackLng: false,
                backend: {
                    loadPath: '../../localization/app/app-{{lng}}.json',
                },
                detection: {
                    order: ['querystring', 'cookie'],
                    caches: ['cookie'],
                },
                returnObjects: true,
            },
            function (err, t) {
                window.jqueryI18next.init(window.i18next, $, {
                    optionsAttr: 'i18n-options',
                    useOptionsAttr: true,
                    parseDefaultValueFromContent: true,
                });
            },
        );

        window.i18next.on('initialized', function (options) {
            window.i18next.changeLanguage(
                Cookies.get('_culture'),
                function (err, t) {
                    setTimeout(function () {
                        let currentLanguage = window.Cookies.get('_culture');
                        if (!currentLanguage) changeLang('uz');
                        else changeLang(currentLanguage);
                    });
                },
            );
        });
    });
};

export { i18nextFunc };

function changeLang(selectedLang) {
    if (selectedLang) {
        window.Cookies.set('_culture', selectedLang);
        $('.lang-link').removeClass('selected');
        $(`.lang-${selectedLang}`).addClass('selected');
        $('#nav-lang-current-lang__text').attr(
            'data-active-lang',
            selectedLang,
        );
        $('#nav-lang-current-lang__text').html(selectedLang);

        window.i18next.changeLanguage(selectedLang, function (err, t) {
            // $.extend($.validator.messages, window[`${selectedLang}LangValidationMessages`])
            $('body').localize();
            changePlaceholder();
            if (typeof Page !== 'undefined') Page.translate();
            if (typeof moment !== 'undefined') moment.locale(`${selectedLang}`);
            if (typeof reInitComponent === 'function') {
                reInitComponent();
            }
        });
    }
}

// // document.querySelector('input[href]')
function changePlaceholder() {
    $.each($('[data-i18n-placeholder]'), function (index, obj) {
        $(obj).attr(
            'placeholder',
            window.i18next.t(obj.getAttribute('data-i18n-placeholder') ?? ''),
        );
    });
}

$(document).ready(function () {
    $('.lang-ru').on('click', function () {
        changeLang('ru');
    });
    $('.lang-uz').on('click', function () {
        changeLang('uz');
    });

    // $('.lang-link-second').on('click', function () {
    //     $('.lang-menu-container').toggleClass('active');
    //     console.log($($(this).children('.lang-link-short')).text());
    // });
    // $('.lang-li').on('click', function () {
    //     $('.lang-menu-container').toggleClass('active');
    //     let text = $($(this).children('.lang-link-short')).text();
    //     $('.lang-link-first').html(text);
    // });
});
