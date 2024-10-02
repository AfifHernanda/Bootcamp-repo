import { $ } from '@wdio/globals'

export default class page{
     get menuButton() { return $('~View menu')}
     get loginMenu() { return $('~Login Menu Item')}
     get logoutMenu() { return $('~Logout Menu Item')}
     get logoutConfirm() { return $('id=android:id/button1')}
}