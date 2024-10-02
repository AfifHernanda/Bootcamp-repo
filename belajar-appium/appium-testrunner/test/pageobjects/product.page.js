import { $ } from '@wdio/globals'
import page from "./page.js"

class productPage extends page{
    get productPageTitle(){ return $('~title')}
}

export default new productPage()