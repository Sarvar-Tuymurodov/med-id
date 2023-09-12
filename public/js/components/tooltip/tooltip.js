export const tooltipComponent = () => {
    function initTooltip() {
        // init all tooltips on page
        let elementsWithTooltips = Array.from(
            document.querySelectorAll('[data-has__tooltip]'),
        ).filter(
            (f) =>
                f.getAttribute('data-has__tooltip') &&
                f.getAttribute('data-has__tooltip') === 'true',
        );
        let bodyClientRect = document.body.getBoundingClientRect();
        for (let elementsWithTooltip of elementsWithTooltips) {
            let tooltipHtml = `<span class="tooltip">${elementsWithTooltip.getAttribute(
                'data-tooltip__value',
            )}</span>`;

            elementsWithTooltip.addEventListener('mouseover', function () {
                if (
                    !elementsWithTooltip.classList.contains('child-showed') &&
                    !elementsWithTooltip.classList.contains('tooltip-toggled')
                ) {
                    elementsWithTooltip.classList.add('tooltip-toggled');
                    elementsWithTooltip.insertAdjacentHTML(
                        'afterend',
                        tooltipHtml,
                    );
                    let elementClientBound =
                        elementsWithTooltip.getBoundingClientRect();
                    let tooltipElement = document.querySelector('.tooltip');
                    let tooltipClientBound =
                        tooltipElement.getBoundingClientRect();

                    //Get center of element
                    let elementX =
                        elementClientBound.x + elementClientBound.width / 2;
                    let elementY =
                        elementClientBound.y + elementClientBound.height / 2;

                    if (
                        window.innerHeight >
                        elementClientBound.bottom + tooltipClientBound.bottom
                    ) {
                        css(tooltipElement, {
                            top: `${elementClientBound.bottom + 10}px`,
                        });
                    }

                    css(tooltipElement, {
                        left: `${elementX - tooltipClientBound.width / 2}px`,
                    });
                    if (
                        tooltipElement.getBoundingClientRect().right >
                        window.innerWidth
                    ) {
                        css(tooltipElement, { left: `auto` });
                    }
                    tooltipElement.classList.add('animate');
                }
            });
            elementsWithTooltip.addEventListener('mouseleave', function () {
                document
                    .querySelectorAll('.tooltip')
                    .forEach((el) => el.remove());
                elementsWithTooltip.classList.remove('tooltip-toggled');
            });
            elementsWithTooltip.addEventListener('click', function () {
                document
                    .querySelectorAll('.tooltip')
                    .forEach((el) => el.remove());
                elementsWithTooltip.classList.remove('tooltip-toggled');
                !elementsWithTooltip.classList.contains('child-showed')
                    ? elementsWithTooltip.classList.add('child-showed')
                    : elementsWithTooltip.classList.remove('child-showed');
            });
        }
    }

    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', initTooltip);
    } else {
        initTooltip();
    }

    /****************** Common JS Start ************************/

    // Function added style to element
    function css(element, style) {
        for (const property in style) element.style[property] = style[property];
    }

    // Function added style to element
    function css(element, style) {
        for (const property in style) element.style[property] = style[property];
    }

    window.addEventListener('click', function (e) {
        let dropdowns = Array.from(
            document.getElementsByClassName('dropdown-window'),
        ).filter((f) => f.classList.contains('active'));
        dropdowns.forEach((f) => {
            console.log(f);
            if (!f.contains(e.target)) {
                if (
                    !document
                        .getElementById(f.getAttribute('data-dropdown-parent'))
                        .contains(e.target)
                ) {
                    document
                        .getElementById(f.getAttribute('data-dropdown-parent'))
                        ?.classList.remove('active', 'child-showed');
                    f.classList.remove('active');
                }
            }
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 767) {
            document.getElementById('nav-burger').classList.remove('open');
        }
    });
};

/****************** Common JS End   ************************/
