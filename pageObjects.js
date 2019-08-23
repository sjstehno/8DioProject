module.exports = {
    url: ('https://8dio.com'),
    elements: {
        // BUTTON FULL SELECTORS
        instrumentsBtn: {
            // OR ?      selector: ('//a[@class="menu__link js-drop__btn"][1]'),  (I don't think so though)
            selector: ('//li/a[@class="menu__link js-drop__btn"]')[0],
            locateStrategy: 'xpath'
        },
        searchBtn: {
            selector: '//a[@class="header-icon hide-after-550 "]',
            locateStrategy: 'xpath'
        },
        scPlayBtn: {
            selector: '//path/*[@class="playButton__play"]',
            locateStrategy: 'xpath'
        },
        snapchatLink: {
            selector: '//a/i[@class="icon icon-pr"]',
            locateStrategy: 'xpath'
        },
        instaLink: {
            selector: '//a/i[@class="icon icon-in"]',
            locateStrategy: 'xpath'
        },
        fbLink: {
            selector: '//a/i[@class="icon icon-f"]',
            locateStrategy: 'xpath'
        },
        twLink: {
            selector: '//a/i[@class="icon icon-tw"]',
            locateStrategy: 'xpath'
        },
        scLink: {
            selector: '//a/i[@class="icon icon-sound"]',
            locateStrategy: 'xpath'
        },
        ytLink: {
            selector: '//a/i[@class="icon icon-yt"]',
            locateStrategy: 'xpath'
        },
        defNewsSubBtn: {
            selector: '//button[@class="btn btn--big btn--red"]',
            locateStrategy: 'xpath'
        },
        mainSearchSingleResult: {
            selector: ('//p[@class="product__name"]')[0],
            locateStrategy: 'xpath'
        },
        addToCart: {
            selector: '//a[@class="btn btn--red"]',
            locateStrategy: 'xpath'
        },
        goToCart: {
            selector: '//a[@href="/cart"]',
            locateStrategy: 'xpath'
        },
        removeItem: {
            selector: '//td[@class="product-remove"]',
            locateStrategy: 'xpath'
        },
        continueShopping: {
            selector: '//a[@class="button wc-backward"]',
            locateStrategy: 'xpath'
        },
        myAccount: {
            selector: ('//a[@class="header-icon"]')[1],
            locateStrategy: 'xpath'
        },
        logout: {
            selector: '//a[@class="account__logout-link light"]',
            locateStrategy: 'xpath'
        },
        popupCloseBtn: {
            selector: '//button[@class="subscribe__close-btn"]',
            locateStrategy: 'xpath'
        },
        popupSubmitBtn: {
            selector: '//button[@class="btn btn--red"]',
            locateStrategy: 'xpath'
        },
        loginSubmitBtn: {
            selector: '//button[@id="submit-login-btn"]',
            locateStrategy: 'xpath'
        },
        // INPUT FULL SELECTORS
        defNewsSubInput: {
            selector: '//p/input[@type="email"]',
            locateStrategy: 'xpath'
        },
        mainSearchInput: {
            selector: '//input[@class="main-search__input"]',
            locateStrategy: 'xpath'
        },
        loginEmailInput: {
            selector: '//input[@id="login-email"]',
            locateStrategy: 'xpath'
        },
        loginPassInput: {
            selector: '//input[@id="login-pass"]',
            locateStrategy: 'xpath'
        },
        popupEmailInput: {
            selector: '//input[@name="user_email"]',
            locateStrategy: 'xpath'
        },
        // OTHER
        subCouponCodeDisplay: {
            selector: '//div[@class="subscribe__coupon-code"]',
            locateStrategy: 'xpath'
        },
        // Sarah
        popUpBox: '.subscribe__box',
        pageLanding: '.page-landing',
        register: {
            selector: '//data-href[contains(text(), "Register")]',
            locateStrategy: 'xpath'
        },
        regEmail: {
            selector: '(//input[@id="reg-email"])[1]',
            locateStrategy: 'xpath'
        },
        regFirstName: {
            selector: '(//input[@id="reg-email"])[2]',
            locateStrategy: 'xpath'
        },
        regLastName: {
            selector: '(//input[@id="reg-email"])[3]',
            locateStrategy: 'xpath'
        },
        regPassword: '#reg-pass',
        confPassword: '[for="reg-pass2"]',
        regButton: {
            selector: '//button[text()="REGISTER"]',
            locateStrategy: 'xpath'
        }
    }
}