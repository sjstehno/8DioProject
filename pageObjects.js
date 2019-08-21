module.exports = {
    url: ('https://8dio.com'),
    elements: {
        // BUTTON ELEMENTS
        instrumentsBtn: '[@class="menu__link js-drop__btn"]',
        searchBtn: '[@class="header-icon hide-after-550 "]',
        scPlayBtn: '[@class="playButton__play"]',
        snapchatLink: '[@class="icon icon-pr"]',
        instaLink: '[@class="icon icon-in"]',
        fbLink: '[@class="icon icon-f"]',
        twLink: '[@class="icon icon-tw"]',
        scLink: '[@class="icon icon-sound"]',
        ytLink: '[@class="icon icon-yt"]',
        defNewsSubBtn: '[@class="btn btn--big btn--red"]',
        mainSearchInput: '[@class="main-search__input"]',
        mainSearchSingleResult: '[@class="product__name"]',
        addToCart: '[@class="btn btn--red"]',
        goToCart: '[@href="/cart"]',
        removeItem: '[@class="remove"]',
        continueShopping: '[@class="button wc-backward"]',
        myAccount: '[@class="header-icon"]',
        logout: '[@class="account__logout-link light"]',
        popupCloseBtn: '[@class="subscribe__close-btn"]',
        popupSubmitBtn: '[@type="submit"]',
        loginSubmitBtn: '[@id="submit-login-btn"]',
        // INPUT ELEMENTS
        defNewsSubInput: '[@type="email"]',
        mainSearchInput: '[@class="main-search__input"]',
        loginEmailInput: '[@id="login-email"]',
        loginPassInput: '[@id="login-pass"]',
        popupEmailInput: '[@name="user_email"]',
        // OTHER
        subCouponCodeDisplay: '[@class="subscribe__coupon-code"]',
    },
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
            locateStrategy: 'usexpath'
        },
        snapchatLink: {
            selector: '//a/i[@class="icon icon-pr"]',
            locateStrategy: 'usexpath'
        },
        instaLink: {
            selector: '//a/i[@class="icon icon-in"]',
            locateStrategy: 'usexpath'
        },
        fbLink: {
            selector: '//a/i[@class="icon icon-f"]',
            locateStrategy: 'usexpath'
        },
        twLink: {
            selector: '//a/i[@class="icon icon-tw"]',
            locateStrategy: 'usexpath'
        },
        scLink: {
            selector: '//a/i[@class="icon icon-sound"]',
            locateStrategy: 'usexpath'
        },
        ytLink: {
            selector: '//a/i[@class="icon icon-yt"]',
            locateStrategy: 'usexpath'
        },
        defNewsSubBtn: {
            selector: '//button[@class="btn btn--big btn--red"]',
            locateStrategy: 'usexpath'
        },
        mainSearchSingleResult: {
            selector: ('//p[@class="product__name"]')[0],
            locateStrategy: 'usexpath'
        },
        addToCart: {
            selector: '//a[@class="btn btn--red"]',
            locateStrategy: 'usexpath'
        },
        goToCart: {
            selector: '//a[@href="/cart"]',
            locateStrategy: 'usexpath'
        },
        removeItem: {
            selector: '//a[@class="remove"]',
            locateStrategy: 'usexpath'
        },
        continueShopping: {
            selector: '//a[@class="button wc-backward"]',
            locateStrategy: 'usexpath'
        },
        myAccount: {
            selector: ('//a[@class="header-icon"]')[1],
            locateStrategy: 'usexpath'
        },
        logout: {
            selector: '//a[@class="account__logout-link light"]',
            locateStrategy: 'usexpath'
        },
        popupCloseBtn: {
            selector: '//button[@class="subscribe__close-btn"]',
            locateStrategy: 'usexpath'
        },
        popupSubmitBtn: {
            selector: ('//button[@type="submit"]')[2],
            locateStrategy: 'usexpath'
        },
        loginSubmitBtn: {
            selector: '//button[@id="submit-login-btn"]',
            locateStrategy: 'usexpath'
        },
        // INPUT FULL SELECTORS
        defNewsSubInput: {
            selector: '//p/input[@type="email"]',
            locateStrategy: 'usexpath'
        },
        mainSearchInput: {
            selector: '//input[@class="main-search__input"]',
            locateStrategy: 'usexpath'
        },
        loginEmailInput: {
            selector: '//input[@id="login-email"]',
            locateStrategy: 'usexpath'
        },
        loginPassInput: {
            selector: '//input[@id="login-pass"]',
            locateStrategy: 'usexpath'
        },
        popupEmailInput: {
            selector: '//input[@name="user_email"]',
            locateStrategy: 'usexpath'
        },    
        // OTHER
        subCouponCodeDisplay: {
            selector: '//div[@class="subscribe__coupon-code"]',
            locateStrategy: 'usexpath'
        },
}