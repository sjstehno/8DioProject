var dioPage = {}
let socialMedia = require('../testAssets/dioAssets')
var navIcons = function (browser, icon) {
    dioPage
        .click(icon)
        .verify.urlContains(icon.keyword)
        .navigate()
}
module.exports = {
    beforeEach: browser => {
        dioPage = browser.page.pageObjects()
        dioPage.navigate()
        .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
    'Close pop-up': browser => {
        dioPage
            .waitForElementVisible('@popUpBox', 10000)
            .waitForElementVisible('@popupCloseBtn', 1000)
            .click('@popupCloseBtn')
            .verify.visible('@pageLanding')
        browser.end()
    },
    'Pop-up coupon code': broswer => {
        dioPage
            .waitForElementVisible('@popUpBox', 10000)
            .setValue('@popupEmailInput', 'dianajones@mailinator.com')
            .click('@popupSubmitBtn')
        dioPage.expect.element('@subCouponCodeDisplay').text.not.to.contain('Your instant coupon will appear here')
    },
    'Social Media icons': browser => {
        socialMedia.forEach(test => {
            navIcons(browser, test)
        })
    },
    
}