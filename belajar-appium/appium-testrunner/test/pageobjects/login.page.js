import { $ } from '@wdio/globals'
import page from "./page.js"

 class loginPage extends page {
    get loginPageTitle(){ return $('id=com.saucelabs.mydemoapp.android:id/loginTV')}
    get catalogMenu(){return $('id=com.saucelabs.mydemoapp.android:id/itemTV')}
    get usernameForm(){ return $('id=com.saucelabs.mydemoapp.android:id/nameET')}
    get passwordForm(){ return $('id=com.saucelabs.mydemoapp.android:id/passwordET')}
    get loginBtn(){ return $('~Tap to login with given credentials')}
    get errorMessagePassword(){return $('id=com.saucelabs.mydemoapp.android:id/passwordErrorTV')}
    get errorMessageUsername(){return $('id=com.saucelabs.mydemoapp.android:id/nameErrorTV')}

    async loginProcess(username,password) {
        await this.usernameForm.setValue(username)
        await this.passwordForm.setValue(password)
        await this.loginBtn.click()
    }

    async logoutProcess(){
        await this.logoutMenu.click()
        await this.logoutConfirm.click()
    }

}


export default new loginPage()