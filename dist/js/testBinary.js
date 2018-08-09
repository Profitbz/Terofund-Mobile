

$(document).ready(function () {

    var chartLeftId = 1;
    var chartRightId = 1;

    function minusChart() {
        console.log(chartLeftId);

        $('.binary__minus').click(function () {
            console.log();
            if (chartLeftId === 2) {
                newChart1();
                chartLeftId--;
            } else if (chartLeftId === 3) {
                newChartLeft2();
                chartLeftId--;
            }
        });

    }

    function newChart1() {
        var my_chart = new Treant({
            chart: {
                container: "#tree-simple",
                connectors: {
                    type: "straight",
                    style: {
                        stroke: "#304FFE"
                    }
                },
                levelSeparation: 50,
                siblingSeparation: 50
            },

            nodeStructure: {
                text: {

                },
                innerHTML: '<div class="tree__parent js-tree__parent">\n' +
                '                        <div class="tree-aside tree-aside_left">\n' +
                '                            <p class="tree-aside__title">Left</p>\n' +
                '                            <p class="tree-aside__text">34 member</p>\n' +
                '                            <div class="tree-aside__text">456,456 USD</div>\n' +
                '                        </div>\n' +
                '<div class="tree__item">\n' +
                '                        <div class="tree__header">\n' +
                '                            <div class="affiliate-table__logo affiliate-table__logo_blue tree__logo">\n' +
                '                                <span>CL</span>\n' +
                '                            </div>\n' +
                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                '                        </div>\n' +
                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                '                                <div class="tree__header-container">\n' +
                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                '                                        <span>LL</span>\n' +
                '                                    </div>\n' +
                '                                    <span class="tree__user">John Doe</span>\n' +
                '                                </div>\n' +
                '                                <div class="tree__info">\n' +
                '                                    Information\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                '\t\t\t\t\t\t\t\t</span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                '                                <span class="tree__value">Salpool</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                '                                </span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                '                                </span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                '                                <span class="tree__value">04.01.18</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                '\t\t\t\t\t\t\t\t</span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                '                                <span class="tree__value">11:15:52</span>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>' +
                '                        <div class="tree-aside tree-aside_right">\n' +
                '                            <p class="tree-aside__title">Right</p>\n' +
                '                            <p class="tree-aside__text">47 member</p>\n' +
                '                            <div class="tree-aside__text">65,32 USD</div>\n' +
                '                        </div>\n' +
                '                    </div>',
                children: [
                    {
                        innerHTML: '<div class="tree__item">\n' +
                        '                        <div class="tree__header">\n' +
                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                        '                                <span>CL</span>\n' +
                        '                            </div>\n' +
                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                        '                        </div>\n' +
                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                        '                                <div class="tree__header-container">\n' +
                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                        '                                        <span>LL</span>\n' +
                        '                                    </div>\n' +
                        '                                    <span class="tree__user">John Doe</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="tree__info">\n' +
                        '                                    Information\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                        '                                <span class="tree__value">Salpool</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                        '                                <span class="tree__value">04.01.18</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                        '                                <span class="tree__value">11:15:52</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>',
                        children: [
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list tree__list_top  js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top tree__list_top tree__list_left js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            },
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        innerHTML: '<div class="tree__item">\n' +
                        '                        <div class="tree__header">\n' +
                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                        '                                <span>CL</span>\n' +
                        '                            </div>\n' +
                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                        '                        </div>\n' +
                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                        '                                <div class="tree__header-container">\n' +
                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                        '                                        <span>LL</span>\n' +
                        '                                    </div>\n' +
                        '                                    <span class="tree__user">John Doe</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="tree__info">\n' +
                        '                                    Information\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                        '                                <span class="tree__value">Salpool</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                        '                                <span class="tree__value">04.01.18</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                        '                                <span class="tree__value">11:15:52</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>',

                        children: [
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top  js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__list_top tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            },
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top tree__list_right js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',

                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        });

        $('.tree__parent').parent().addClass('bug');

        $('.tree__header').click(function (e) {

            if ($(this).hasClass("list-open")) {
                e.stopPropagation();
                $('.js-tree-list').fadeOut();
                $(this).removeClass("list-open");
            } else {
                e.stopPropagation();
                $('.js-tree-list').fadeOut();
                $(this).parent().find('.js-tree-list').fadeIn();
                $('.affiliate-table__logo_blue').addClass('affiliate-table__logo_black');
                $('.affiliate-table__logo_blue').removeClass('affiliate-table__logo_blue');
                $(this).parent().find('.affiliate-table__logo').addClass('affiliate-table__logo_blue');
                $(this).parent().find('.affiliate-table__logo').removeClass('affiliate-table__logo_black');
                $(this).addClass("list-open");
            }


            $(document).click(function (e) {
                e.stopPropagation();
                if (!e.target.closest('.js-tree-list') ) {
                    $('.list-open').removeClass('.list-open');
                    $(this).find('.js-tree-list').fadeOut();
                }
            });
        });
    }

    newChart1();

    function newChartLeft2() {
        var my_chart = new Treant({
            chart: {
                container: "#tree-simple",
                connectors: {
                    type: "straight",
                    style: {
                        stroke: "#304FFE"
                    }
                },
                levelSeparation: 50,
                siblingSeparation: 50
            },

            nodeStructure: {
                text: {

                },
                innerHTML: '<div class="tree__parent js-tree__parent">\n' +
                '                        <div class="tree-aside tree-aside_left">\n' +
                '                            <p class="tree-aside__title">Left</p>\n' +
                '                            <p class="tree-aside__text">34 member</p>\n' +
                '                            <div class="tree-aside__text">456,456 USD</div>\n' +
                '                        </div>\n' +
                '<div class="tree__item">\n' +
                '                        <div class="tree__header">\n' +
                '                            <div class="affiliate-table__logo affiliate-table__logo_blue tree__logo">\n' +
                '                                <span>CL</span>\n' +
                '                            </div>\n' +
                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                '                        </div>\n' +
                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                '                                <div class="tree__header-container">\n' +
                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                '                                        <span>LL</span>\n' +
                '                                    </div>\n' +
                '                                    <span class="tree__user">John Doe</span>\n' +
                '                                </div>\n' +
                '                                <div class="tree__info">\n' +
                '                                    Information\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                '\t\t\t\t\t\t\t\t</span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                '                                <span class="tree__value">Salpool</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                '                                </span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                '                                </span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                '                                <span class="tree__value">04.01.18</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                '\t\t\t\t\t\t\t\t</span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                '                                <span class="tree__value">11:15:52</span>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>' +
                '                        <div class="tree-aside tree-aside_right">\n' +
                '                            <p class="tree-aside__title">Right</p>\n' +
                '                            <p class="tree-aside__text">47 member</p>\n' +
                '                            <div class="tree-aside__text">65,32 USD</div>\n' +
                '                        </div>\n' +
                '                    </div>',
                children: [
                    {
                        innerHTML: '<div class="tree__item">\n' +
                        '                        <div class="tree__header">\n' +
                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                        '                                <span>CL</span>\n' +
                        '                            </div>\n' +
                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                        '                        </div>\n' +
                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                        '                                <div class="tree__header-container">\n' +
                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                        '                                        <span>LL</span>\n' +
                        '                                    </div>\n' +
                        '                                    <span class="tree__user">John Doe</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="tree__info">\n' +
                        '                                    Information\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                        '                                <span class="tree__value">Salpool</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                        '                                <span class="tree__value">04.01.18</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                        '                                <span class="tree__value">11:15:52</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>',
                        children: [
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                            '<div class="binary__minus"></div>' +
                                        '                    </div>',
                                        children: [
                                            {
                                                innerHTML: '<div class="tree__item">\n' +
                                                '                        <div class="tree__header">\n' +
                                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                '                                <span>CL</span>\n' +
                                                '                            </div>\n' +
                                                '                            <span class="tree__text">Cryptoconsulting2</span>\n' +
                                                '                        </div>\n' +
                                                '                        <div class="user-notify-list tree__list tree__list_top tree__list_left js-tree-list" style="display: none">\n' +
                                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                '                                <div class="tree__header-container">\n' +
                                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                '                                        <span>LL</span>\n' +
                                                '                                    </div>\n' +
                                                '                                    <span class="tree__user">John Doe</span>\n' +
                                                '                                </div>\n' +
                                                '                                <div class="tree__info">\n' +
                                                '                                    Information\n' +
                                                '                                </div>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                '                                <span class="tree__value">Salpool</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                '                                <span class="tree__value">04.01.18</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                '                                <span class="tree__value">11:15:52</span>\n' +
                                                '                            </div>\n' +
                                                '                        </div>\n' +
                                                '                    </div>',

                                            },
                                            {
                                                innerHTML: '<div class="tree__item">\n' +
                                                '                        <div class="tree__header">\n' +
                                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                '                                <span>CL</span>\n' +
                                                '                            </div>\n' +
                                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                '                        </div>\n' +
                                                '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                '                                <div class="tree__header-container">\n' +
                                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                '                                        <span>LL</span>\n' +
                                                '                                    </div>\n' +
                                                '                                    <span class="tree__user">John Doe</span>\n' +
                                                '                                </div>\n' +
                                                '                                <div class="tree__info">\n' +
                                                '                                    Information\n' +
                                                '                                </div>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                '                                <span class="tree__value">Salpool</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                '                                <span class="tree__value">04.01.18</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                '                                <span class="tree__value">11:15:52</span>\n' +
                                                '                            </div>\n' +
                                                '                        </div>\n' +
                                                '                    </div>',
                                            }
                                        ]
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            },
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting1</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        innerHTML: '<div class="tree__item">\n' +
                        '                        <div class="tree__header">\n' +
                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                        '                                <span>CL</span>\n' +
                        '                            </div>\n' +
                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                        '                        </div>\n' +
                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                        '                                <div class="tree__header-container">\n' +
                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                        '                                        <span>LL</span>\n' +
                        '                                    </div>\n' +
                        '                                    <span class="tree__user">John Doe</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="tree__info">\n' +
                        '                                    Information\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                        '                                <span class="tree__value">Salpool</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                        '                                <span class="tree__value">04.01.18</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                        '                                <span class="tree__value">11:15:52</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>',

                        children: [
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            },
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting2</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list  js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list tree__list_top tree__list_right tree__list_top js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        });

        // $('.tree__parent').parent().addClass('bug');

        minusChart();

        $('.tree__header').click(function (e) {

            if ($(this).hasClass("list-open")) {
                e.stopPropagation();
                $('.js-tree-list').fadeOut();
                $(this).removeClass("list-open");
            } else {
                e.stopPropagation();
                $('.js-tree-list').fadeOut();
                $(this).parent().find('.js-tree-list').fadeIn();
                $('.affiliate-table__logo_blue').addClass('affiliate-table__logo_black');
                $('.affiliate-table__logo_blue').removeClass('affiliate-table__logo_blue');
                $(this).parent().find('.affiliate-table__logo').addClass('affiliate-table__logo_blue');
                $(this).parent().find('.affiliate-table__logo').removeClass('affiliate-table__logo_black');
                $(this).addClass("list-open");
            }


            $(document).click(function (e) {
                e.stopPropagation();
                if (!e.target.closest('.js-tree-list') ) {
                    $('.list-open').removeClass('.list-open');
                    $(this).find('.js-tree-list').fadeOut();
                }
            });
        });


    }



    function newChartLeft3() {
        var my_chart = new Treant({
            chart: {
                container: "#tree-simple",
                connectors: {
                    type: "straight",
                    style: {
                        stroke: "#304FFE"
                    }
                },
                levelSeparation: 50,
                siblingSeparation: 50
            },

            nodeStructure: {
                text: {

                },
                innerHTML: '<div class="tree__parent js-tree__parent">\n' +
                '                        <div class="tree-aside tree-aside_left">\n' +
                '                            <p class="tree-aside__title">Left</p>\n' +
                '                            <p class="tree-aside__text">34 member</p>\n' +
                '                            <div class="tree-aside__text">456,456 USD</div>\n' +
                '                        </div>\n' +
                '<div class="tree__item">\n' +
                '                        <div class="tree__header">\n' +
                '                            <div class="affiliate-table__logo affiliate-table__logo_blue tree__logo">\n' +
                '                                <span>CL</span>\n' +
                '                            </div>\n' +
                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                '                        </div>\n' +
                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                '                                <div class="tree__header-container">\n' +
                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                '                                        <span>LL</span>\n' +
                '                                    </div>\n' +
                '                                    <span class="tree__user">John Doe</span>\n' +
                '                                </div>\n' +
                '                                <div class="tree__info">\n' +
                '                                    Information\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                '\t\t\t\t\t\t\t\t</span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                '                                <span class="tree__value">Salpool</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                '                                </span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                '                                </span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                '                                <span class="tree__value">04.01.18</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                '\t\t\t\t\t\t\t\t</span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                '                                <span class="tree__value">11:15:52</span>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>' +
                '                        <div class="tree-aside tree-aside_right">\n' +
                '                            <p class="tree-aside__title">Right</p>\n' +
                '                            <p class="tree-aside__text">47 member</p>\n' +
                '                            <div class="tree-aside__text">65,32 USD</div>\n' +
                '                        </div>\n' +
                '                    </div>',
                children: [
                    {
                        innerHTML: '<div class="tree__item">\n' +
                        '                        <div class="tree__header">\n' +
                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                        '                                <span>CL</span>\n' +
                        '                            </div>\n' +
                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                        '                        </div>\n' +
                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                        '                                <div class="tree__header-container">\n' +
                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                        '                                        <span>LL</span>\n' +
                        '                                    </div>\n' +
                        '                                    <span class="tree__user">John Doe</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="tree__info">\n' +
                        '                                    Information\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                        '                                <span class="tree__value">Salpool</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                        '                                <span class="tree__value">04.01.18</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                        '                                <span class="tree__value">11:15:52</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>',
                        children: [
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                        children: [
                                            {
                                                innerHTML: '<div class="tree__item">\n' +
                                                '                        <div class="tree__header">\n' +
                                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                '                                <span>CL</span>\n' +
                                                '                            </div>\n' +
                                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                '                        </div>\n' +
                                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                '                                <div class="tree__header-container">\n' +
                                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                '                                        <span>LL</span>\n' +
                                                '                                    </div>\n' +
                                                '                                    <span class="tree__user">John Doe</span>\n' +
                                                '                                </div>\n' +
                                                '                                <div class="tree__info">\n' +
                                                '                                    Information\n' +
                                                '                                </div>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                '                                <span class="tree__value">Salpool</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                '                                <span class="tree__value">04.01.18</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                '                                <span class="tree__value">11:15:52</span>\n' +
                                                '                            </div>\n' +
                                                '                        </div>\n' +
                                                '                    </div>',

                                            },
                                            {
                                                innerHTML: '<div class="tree__item">\n' +
                                                '                        <div class="tree__header">\n' +
                                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                '                                <span>CL</span>\n' +
                                                '                            </div>\n' +
                                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                '                        </div>\n' +
                                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                '                                <div class="tree__header-container">\n' +
                                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                '                                        <span>LL</span>\n' +
                                                '                                    </div>\n' +
                                                '                                    <span class="tree__user">John Doe</span>\n' +
                                                '                                </div>\n' +
                                                '                                <div class="tree__info">\n' +
                                                '                                    Information\n' +
                                                '                                </div>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                '                                <span class="tree__value">Salpool</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                '                                <span class="tree__value">04.01.18</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                '                                <span class="tree__value">11:15:52</span>\n' +
                                                '                            </div>\n' +
                                                '                        </div>\n' +
                                                '<div class="binary__minus"></div>' +
                                                '                    </div>',
                                                children: [
                                                    {
                                                        innerHTML: '<div class="tree__item">\n' +
                                                        '                        <div class="tree__header">\n' +
                                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                        '                                <span>CL</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                        '                        </div>\n' +
                                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                        '                                <div class="tree__header-container">\n' +
                                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                        '                                        <span>LL</span>\n' +
                                                        '                                    </div>\n' +
                                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                                        '                                </div>\n' +
                                                        '                                <div class="tree__info">\n' +
                                                        '                                    Information\n' +
                                                        '                                </div>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                        '                                <span class="tree__value">Salpool</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                        '                                </span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                        '                                </span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                                        '                            </div>\n' +
                                                        '                        </div>\n' +
                                                        '                    </div>',

                                                    },
                                                    {
                                                        innerHTML: '<div class="tree__item">\n' +
                                                        '                        <div class="tree__header">\n' +
                                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                        '                                <span>CL</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                        '                        </div>\n' +
                                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                        '                                <div class="tree__header-container">\n' +
                                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                        '                                        <span>LL</span>\n' +
                                                        '                                    </div>\n' +
                                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                                        '                                </div>\n' +
                                                        '                                <div class="tree__info">\n' +
                                                        '                                    Information\n' +
                                                        '                                </div>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                        '                                <span class="tree__value">Salpool</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                        '                                </span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                        '                                </span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                                        '                            </div>\n' +
                                                        '                        </div>\n' +
                                                        '                    </div>',
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            },
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        innerHTML: '<div class="tree__item">\n' +
                        '                        <div class="tree__header">\n' +
                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                        '                                <span>CL</span>\n' +
                        '                            </div>\n' +
                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                        '                        </div>\n' +
                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                        '                                <div class="tree__header-container">\n' +
                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                        '                                        <span>LL</span>\n' +
                        '                                    </div>\n' +
                        '                                    <span class="tree__user">John Doe</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="tree__info">\n' +
                        '                                    Information\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                        '                                <span class="tree__value">Salpool</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                        '                                <span class="tree__value">04.01.18</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                        '                                <span class="tree__value">11:15:52</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>',

                        children: [
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            },
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                        children: [
                                            {
                                                innerHTML: '<div class="tree__item">\n' +
                                                '                        <div class="tree__header">\n' +
                                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                '                                <span>CL</span>\n' +
                                                '                            </div>\n' +
                                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                '                        </div>\n' +
                                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                '                                <div class="tree__header-container">\n' +
                                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                '                                        <span>LL</span>\n' +
                                                '                                    </div>\n' +
                                                '                                    <span class="tree__user">John Doe</span>\n' +
                                                '                                </div>\n' +
                                                '                                <div class="tree__info">\n' +
                                                '                                    Information\n' +
                                                '                                </div>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                '                                <span class="tree__value">Salpool</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                '                                <span class="tree__value">04.01.18</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                '                                <span class="tree__value">11:15:52</span>\n' +
                                                '                            </div>\n' +
                                                '                        </div>\n' +
                                                '                    </div>',
                                            },
                                            {
                                                innerHTML: '<div class="tree__item">\n' +
                                                '                        <div class="tree__header">\n' +
                                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                '                                <span>CL</span>\n' +
                                                '                            </div>\n' +
                                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                '                        </div>\n' +
                                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                '                                <div class="tree__header-container">\n' +
                                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                '                                        <span>LL</span>\n' +
                                                '                                    </div>\n' +
                                                '                                    <span class="tree__user">John Doe</span>\n' +
                                                '                                </div>\n' +
                                                '                                <div class="tree__info">\n' +
                                                '                                    Information\n' +
                                                '                                </div>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                '                                <span class="tree__value">Salpool</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                '                                <span class="tree__value">04.01.18</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                '                                <span class="tree__value">11:15:52</span>\n' +
                                                '                            </div>\n' +
                                                '                        </div>\n' +
                                                '                    </div>',


                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        });

        minusChart();

        $('.tree__header').click(function (e) {

            if ($(this).hasClass("list-open")) {
                e.stopPropagation();
                $('.js-tree-list').fadeOut();
                $(this).removeClass("list-open");
            } else {
                e.stopPropagation();
                $('.js-tree-list').fadeOut();
                $(this).parent().find('.js-tree-list').fadeIn();
                $('.affiliate-table__logo_blue').addClass('affiliate-table__logo_black');
                $('.affiliate-table__logo_blue').removeClass('affiliate-table__logo_blue');
                $(this).parent().find('.affiliate-table__logo').addClass('affiliate-table__logo_blue');
                $(this).parent().find('.affiliate-table__logo').removeClass('affiliate-table__logo_black');
                $(this).addClass("list-open");
            }


            $(document).click(function (e) {
                e.stopPropagation();
                if (!e.target.closest('.js-tree-list') ) {
                    $('.list-open').removeClass('.list-open');
                    $(this).find('.js-tree-list').fadeOut();
                }
            });


        });
    }

    function newChartRight2() {
        var my_chart = new Treant({
            chart: {
                container: "#tree-simple",
                connectors: {
                    type: "straight",
                    style: {
                        stroke: "#304FFE"
                    }
                },
                levelSeparation: 50,
                siblingSeparation: 50
            },

            nodeStructure: {
                text: {

                },
                innerHTML: '<div class="tree__parent js-tree__parent">\n' +
                '                        <div class="tree-aside tree-aside_left">\n' +
                '                            <p class="tree-aside__title">Left</p>\n' +
                '                            <p class="tree-aside__text">34 member</p>\n' +
                '                            <div class="tree-aside__text">456,456 USD</div>\n' +
                '                        </div>\n' +
                '<div class="tree__item">\n' +
                '                        <div class="tree__header">\n' +
                '                            <div class="affiliate-table__logo affiliate-table__logo_blue tree__logo">\n' +
                '                                <span>CL</span>\n' +
                '                            </div>\n' +
                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                '                        </div>\n' +
                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                '                                <div class="tree__header-container">\n' +
                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                '                                        <span>LL</span>\n' +
                '                                    </div>\n' +
                '                                    <span class="tree__user">John Doe</span>\n' +
                '                                </div>\n' +
                '                                <div class="tree__info">\n' +
                '                                    Information\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                '\t\t\t\t\t\t\t\t</span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                '                                <span class="tree__value">Salpool</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                '                                </span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                '                                </span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                '                                <span class="tree__value">04.01.18</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                '\t\t\t\t\t\t\t\t</span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                '                                <span class="tree__value">11:15:52</span>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>' +
                '                        <div class="tree-aside tree-aside_right">\n' +
                '                            <p class="tree-aside__title">Right</p>\n' +
                '                            <p class="tree-aside__text">47 member</p>\n' +
                '                            <div class="tree-aside__text">65,32 USD</div>\n' +
                '                        </div>\n' +
                '                    </div>',
                children: [
                    {
                        innerHTML: '<div class="tree__item">\n' +
                        '                        <div class="tree__header">\n' +
                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                        '                                <span>CL</span>\n' +
                        '                            </div>\n' +
                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                        '                        </div>\n' +
                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                        '                                <div class="tree__header-container">\n' +
                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                        '                                        <span>LL</span>\n' +
                        '                                    </div>\n' +
                        '                                    <span class="tree__user">John Doe</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="tree__info">\n' +
                        '                                    Information\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                        '                                <span class="tree__value">Salpool</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                        '                                <span class="tree__value">04.01.18</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                        '                                <span class="tree__value">11:15:52</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>',
                        children: [
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            },
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        innerHTML: '<div class="tree__item">\n' +
                        '                        <div class="tree__header">\n' +
                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                        '                                <span>CL</span>\n' +
                        '                            </div>\n' +
                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                        '                        </div>\n' +
                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                        '                                <div class="tree__header-container">\n' +
                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                        '                                        <span>LL</span>\n' +
                        '                                    </div>\n' +
                        '                                    <span class="tree__user">John Doe</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="tree__info">\n' +
                        '                                    Information\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                        '                                <span class="tree__value">Salpool</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                        '                                <span class="tree__value">04.01.18</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                        '                                <span class="tree__value">11:15:52</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>',

                        children: [
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            },
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                        children: [
                                            {
                                                innerHTML: '<div class="tree__item">\n' +
                                                '                        <div class="tree__header">\n' +
                                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                '                                <span>CL</span>\n' +
                                                '                            </div>\n' +
                                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                '                        </div>\n' +
                                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                '                                <div class="tree__header-container">\n' +
                                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                '                                        <span>LL</span>\n' +
                                                '                                    </div>\n' +
                                                '                                    <span class="tree__user">John Doe</span>\n' +
                                                '                                </div>\n' +
                                                '                                <div class="tree__info">\n' +
                                                '                                    Information\n' +
                                                '                                </div>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                '                                <span class="tree__value">Salpool</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                '                                <span class="tree__value">04.01.18</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                '                                <span class="tree__value">11:15:52</span>\n' +
                                                '                            </div>\n' +
                                                '                        </div>\n' +
                                                '                    </div>',
                                            },
                                            {
                                                innerHTML: '<div class="tree__item">\n' +
                                                '                        <div class="tree__header">\n' +
                                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                '                                <span>CL</span>\n' +
                                                '                            </div>\n' +
                                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                '                        </div>\n' +
                                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                '                                <div class="tree__header-container">\n' +
                                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                '                                        <span>LL</span>\n' +
                                                '                                    </div>\n' +
                                                '                                    <span class="tree__user">John Doe</span>\n' +
                                                '                                </div>\n' +
                                                '                                <div class="tree__info">\n' +
                                                '                                    Information\n' +
                                                '                                </div>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                '                                <span class="tree__value">Salpool</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                '                                <span class="tree__value">04.01.18</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                '                                <span class="tree__value">11:15:52</span>\n' +
                                                '                            </div>\n' +
                                                '                        </div>\n' +
                                                '                    </div>',


                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        });

        $('.tree__header').click(function (e) {

            if ($(this).hasClass("list-open")) {
                e.stopPropagation();
                $('.js-tree-list').fadeOut();
                $(this).removeClass("list-open");
            } else {
                e.stopPropagation();
                $('.js-tree-list').fadeOut();
                $(this).parent().find('.js-tree-list').fadeIn();
                $('.affiliate-table__logo_blue').addClass('affiliate-table__logo_black');
                $('.affiliate-table__logo_blue').removeClass('affiliate-table__logo_blue');
                $(this).parent().find('.affiliate-table__logo').addClass('affiliate-table__logo_blue');
                $(this).parent().find('.affiliate-table__logo').removeClass('affiliate-table__logo_black');
                $(this).addClass("list-open");
            }


            $(document).click(function (e) {
                e.stopPropagation();
                if (!e.target.closest('.js-tree-list') ) {
                    $('.list-open').removeClass('.list-open');
                    $(this).find('.js-tree-list').fadeOut();
                }
            });
        });
    }

    function newChartRight3() {
        var my_chart = new Treant({
            chart: {
                container: "#tree-simple",
                connectors: {
                    type: "straight",
                    style: {
                        stroke: "#304FFE"
                    }
                },
                levelSeparation: 50,
                siblingSeparation: 50
            },

            nodeStructure: {
                text: {

                },
                innerHTML: '<div class="tree__parent js-tree__parent">\n' +
                '                        <div class="tree-aside tree-aside_left">\n' +
                '                            <p class="tree-aside__title">Left</p>\n' +
                '                            <p class="tree-aside__text">34 member</p>\n' +
                '                            <div class="tree-aside__text">456,456 USD</div>\n' +
                '                        </div>\n' +
                '<div class="tree__item">\n' +
                '                        <div class="tree__header">\n' +
                '                            <div class="affiliate-table__logo affiliate-table__logo_blue tree__logo">\n' +
                '                                <span>CL</span>\n' +
                '                            </div>\n' +
                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                '                        </div>\n' +
                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                '                                <div class="tree__header-container">\n' +
                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                '                                        <span>LL</span>\n' +
                '                                    </div>\n' +
                '                                    <span class="tree__user">John Doe</span>\n' +
                '                                </div>\n' +
                '                                <div class="tree__info">\n' +
                '                                    Information\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                '\t\t\t\t\t\t\t\t</span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                '                                <span class="tree__value">Salpool</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                '                                </span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                '                                </span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                '                                <span class="tree__value">04.01.18</span>\n' +
                '                            </div>\n' +
                '                            <div class="user-notify-list__item">\n' +
                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                '\t\t\t\t\t\t\t\t</span>\n' +
                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                '                                <span class="tree__value">11:15:52</span>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>' +
                '                        <div class="tree-aside tree-aside_right">\n' +
                '                            <p class="tree-aside__title">Right</p>\n' +
                '                            <p class="tree-aside__text">47 member</p>\n' +
                '                            <div class="tree-aside__text">65,32 USD</div>\n' +
                '                        </div>\n' +
                '                    </div>',
                children: [
                    {
                        innerHTML: '<div class="tree__item">\n' +
                        '                        <div class="tree__header">\n' +
                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                        '                                <span>CL</span>\n' +
                        '                            </div>\n' +
                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                        '                        </div>\n' +
                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                        '                                <div class="tree__header-container">\n' +
                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                        '                                        <span>LL</span>\n' +
                        '                                    </div>\n' +
                        '                                    <span class="tree__user">John Doe</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="tree__info">\n' +
                        '                                    Information\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                        '                                <span class="tree__value">Salpool</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                        '                                <span class="tree__value">04.01.18</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                        '                                <span class="tree__value">11:15:52</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>',
                        children: [
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            },
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        innerHTML: '<div class="tree__item">\n' +
                        '                        <div class="tree__header">\n' +
                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                        '                                <span>CL</span>\n' +
                        '                            </div>\n' +
                        '                            <span class="tree__text">Cryptoconsulting1</span>\n' +
                        '                        </div>\n' +
                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                        '                                <div class="tree__header-container">\n' +
                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                        '                                        <span>LL</span>\n' +
                        '                                    </div>\n' +
                        '                                    <span class="tree__user">John Doe</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="tree__info">\n' +
                        '                                    Information\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                        '                                <span class="tree__value">Salpool</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                        '                                </span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                        '                                <span class="tree__value">04.01.18</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="user-notify-list__item">\n' +
                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                        '\t\t\t\t\t\t\t\t</span>\n' +
                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                        '                                <span class="tree__value">11:15:52</span>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>',

                        children: [
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting2</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    }
                                ]
                            },
                            {
                                innerHTML: '<div class="tree__item">\n' +
                                '                        <div class="tree__header">\n' +
                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                '                                <span>CL</span>\n' +
                                '                            </div>\n' +
                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                '                        </div>\n' +
                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                '                                <div class="tree__header-container">\n' +
                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                '                                        <span>LL</span>\n' +
                                '                                    </div>\n' +
                                '                                    <span class="tree__user">John Doe</span>\n' +
                                '                                </div>\n' +
                                '                                <div class="tree__info">\n' +
                                '                                    Information\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                '                                <span class="tree__value">Salpool</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                '                                </span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                '                                <span class="tree__value">04.01.18</span>\n' +
                                '                            </div>\n' +
                                '                            <div class="user-notify-list__item">\n' +
                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                '\t\t\t\t\t\t\t\t</span>\n' +
                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                '                                <span class="tree__value">11:15:52</span>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                                children: [
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                    },
                                    {
                                        innerHTML: '<div class="tree__item">\n' +
                                        '                        <div class="tree__header">\n' +
                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                        '                                <span>CL</span>\n' +
                                        '                            </div>\n' +
                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                        '                        </div>\n' +
                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                        '                                <div class="tree__header-container">\n' +
                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                        '                                        <span>LL</span>\n' +
                                        '                                    </div>\n' +
                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                        '                                </div>\n' +
                                        '                                <div class="tree__info">\n' +
                                        '                                    Information\n' +
                                        '                                </div>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                        '                                <span class="tree__value">Salpool</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                        '                                </span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                        '                            </div>\n' +
                                        '                            <div class="user-notify-list__item">\n' +
                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                        '                            </div>\n' +
                                        '                        </div>\n' +
                                        '                    </div>',
                                        children: [
                                            {
                                                innerHTML: '<div class="tree__item">\n' +
                                                '                        <div class="tree__header">\n' +
                                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                '                                <span>CL</span>\n' +
                                                '                            </div>\n' +
                                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                '                        </div>\n' +
                                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                '                                <div class="tree__header-container">\n' +
                                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                '                                        <span>LL</span>\n' +
                                                '                                    </div>\n' +
                                                '                                    <span class="tree__user">John Doe</span>\n' +
                                                '                                </div>\n' +
                                                '                                <div class="tree__info">\n' +
                                                '                                    Information\n' +
                                                '                                </div>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                '                                <span class="tree__value">Salpool</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                '                                <span class="tree__value">04.01.18</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                '                                <span class="tree__value">11:15:52</span>\n' +
                                                '                            </div>\n' +
                                                '                        </div>\n' +
                                                '                    </div>',
                                            },
                                            {
                                                innerHTML: '<div class="tree__item">\n' +
                                                '                        <div class="tree__header">\n' +
                                                '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                '                                <span>CL</span>\n' +
                                                '                            </div>\n' +
                                                '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                '                        </div>\n' +
                                                '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                '                                <div class="tree__header-container">\n' +
                                                '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                '                                        <span>LL</span>\n' +
                                                '                                    </div>\n' +
                                                '                                    <span class="tree__user">John Doe</span>\n' +
                                                '                                </div>\n' +
                                                '                                <div class="tree__info">\n' +
                                                '                                    Information\n' +
                                                '                                </div>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                '                                <span class="tree__value">Salpool</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                '                                </span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                '                                <span class="tree__value">04.01.18</span>\n' +
                                                '                            </div>\n' +
                                                '                            <div class="user-notify-list__item">\n' +
                                                '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                '\t\t\t\t\t\t\t\t</span>\n' +
                                                '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                '                                <span class="tree__value">11:15:52</span>\n' +
                                                '                            </div>\n' +
                                                '                        </div>\n' +
                                                '                    </div>',
                                                children: [
                                                    {
                                                        innerHTML: '<div class="tree__item">\n' +
                                                        '                        <div class="tree__header">\n' +
                                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                        '                                <span>CL</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                        '                        </div>\n' +
                                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                        '                                <div class="tree__header-container">\n' +
                                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                        '                                        <span>LL</span>\n' +
                                                        '                                    </div>\n' +
                                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                                        '                                </div>\n' +
                                                        '                                <div class="tree__info">\n' +
                                                        '                                    Information\n' +
                                                        '                                </div>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                        '                                <span class="tree__value">Salpool</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                        '                                </span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                        '                                </span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                                        '                            </div>\n' +
                                                        '                        </div>\n' +
                                                        '                    </div>',
                                                    },
                                                    {
                                                        innerHTML: '<div class="tree__item">\n' +
                                                        '                        <div class="tree__header">\n' +
                                                        '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                                        '                                <span>CL</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                                        '                        </div>\n' +
                                                        '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                                        '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                                        '                                <div class="tree__header-container">\n' +
                                                        '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                                        '                                        <span>LL</span>\n' +
                                                        '                                    </div>\n' +
                                                        '                                    <span class="tree__user">John Doe</span>\n' +
                                                        '                                </div>\n' +
                                                        '                                <div class="tree__info">\n' +
                                                        '                                    Information\n' +
                                                        '                                </div>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                                        '                                <span class="tree__value">Salpool</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                                        '                                </span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                                        '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                                        '                                </span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                                        '                                <span class="tree__value">04.01.18</span>\n' +
                                                        '                            </div>\n' +
                                                        '                            <div class="user-notify-list__item">\n' +
                                                        '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                                        '\t\t\t\t\t\t\t\t</span>\n' +
                                                        '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                                        '                                <span class="tree__value">11:15:52</span>\n' +
                                                        '                            </div>\n' +
                                                        '                        </div>\n' +
                                                        '                    </div>',


                                                    }
                                                ]

                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        });

        $('.tree__header').click(function (e) {

            if ($(this).hasClass("list-open")) {
                e.stopPropagation();
                $('.js-tree-list').fadeOut();
                $(this).removeClass("list-open");
            } else {
                e.stopPropagation();
                $('.js-tree-list').fadeOut();
                $(this).parent().find('.js-tree-list').fadeIn();
                $('.affiliate-table__logo_blue').addClass('affiliate-table__logo_black');
                $('.affiliate-table__logo_blue').removeClass('affiliate-table__logo_blue');
                $(this).parent().find('.affiliate-table__logo').addClass('affiliate-table__logo_blue');
                $(this).parent().find('.affiliate-table__logo').removeClass('affiliate-table__logo_black');
                $(this).addClass("list-open");
            }


            $(document).click(function (e) {
                e.stopPropagation();
                if (!e.target.closest('.js-tree-list') ) {
                    $('.list-open').removeClass('.list-open');
                    $(this).find('.js-tree-list').fadeOut();
                }
            });
        });
    }


    $('.js-binary-add-right').click(function () {

        if (chartRightId === 1) {
            newChartRight2();
            chartRightId++;
        } else if (chartRightId === 2) {
            newChartRight3();
            chartRightId++;
        }

    })

    $('.js-binary-add-left').click(function () {

        if (chartLeftId === 1) {
            newChartLeft2();
            chartLeftId++;
        } else if (chartLeftId === 2) {
            newChartLeft3();
        }

        console.log(chartLeftId);

    });


    $('.binary__minus').click(function () {
        cosnole.log('click');
        if (chartLeftId === 1) {
            newChartLeft1();
            chartLeftId--;
        } else if (chartLeftId === 2) {
            newChartLeft2();
            chartLeftId--;
        }
    });


});