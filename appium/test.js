import { remote } from "webdriverio";

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.android.settings',
    'appium:appActivity': '.Settings',
  };

  const options = {
    hostname: 'localhost',
    port: 4723,
    logLevel: 'info',
    capabilities,
  }

  async function main() {
    const driver = await remote(options)

    try{
        const batteryItem = await driver .$('//android.widget.TextView[@resource-id="android:id/title" and @text="Bluetooth"]')
        await batteryItem.click()
        await new Promise(resolve => setTimeout(resolve, 3000));
    } finally{
        await driver.deleteSession()
    }
  }

  main().catch(console.error)