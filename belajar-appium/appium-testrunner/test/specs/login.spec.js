import { $, driver, expect} from '@wdio/globals';
import loginPage from '../pageobjects/login.page';
import productPage from '../pageobjects/product.page';
import scroll from '../helpers.js/scroll.js';

describe('Login Feature', () => {

        beforeEach( async () => {
            await loginPage.menuButton.click()
            await loginPage.loginMenu.click()

            await expect (loginPage.loginPageTitle).toHaveText('Login')
        });

        it('login with valid username and password', async () => {
            await loginPage.loginProcess("bod@example.com","10203040")
            await loginPage.menuButton.click()

            expect (loginPage.logoutMenu).toHaveText("Log Out")

            await loginPage.menuButton.click()
            await loginPage.logoutProcess()
            
        });
        it('login with empty password', async () => {
            await loginPage.loginProcess("bod@example.com","")

            expect (loginPage.errorMessagePassword).toHaveText(
                expect.stringContaining('Enter Password')
            )
            
        });
        it('login with username password', async () => {
            await loginPage.loginProcess("","10203040")

            expect(loginPage.errorMessageUsername).toHaveText(
                expect.stringContaining('Username is required')
            )
            
        });
        it('test coba scroll',async () => {
            await loginPage.menuButton.click()
            await loginPage.catalogMenu.click()
            await driver.pause(1000)
            await scroll(2000, 1000, 500)
            expect ($('(//android.widget.ImageView[@content-desc="Product Image"])[1]')).toBeDisplayed()


        });

        afterEach(async () => {
            await driver.pause(3000)
        });
});