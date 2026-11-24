import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await browser.pause(3000)
        await LoginPage.login('chad.wilkes1462@stu.mtec.edu', 'SoftwareQA#26')
        await browser.pause(3000)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Dashboard'))
    })
})

