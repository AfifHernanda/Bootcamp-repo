import {driver , $} from '@wdio/globals';
describe('Setting App', async function (){
    it('coba klik menu bluetooth',async () => {
        const bluetoothMenu = await $('//android.widget.TextView[@resource-id="android:id/title" and @text="Bluetooth"]')
        bluetoothMenu.click()
        await driver.pause(3000)
    });
});