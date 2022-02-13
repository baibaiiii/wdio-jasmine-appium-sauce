import LoginScreen from '../screen-objects/Login';
import {restartApp} from "../helpers/until";


describe('Login Test APP', () => {
    beforeEach(async () => {
        await restartApp();
        await LoginScreen.waitForIsShown();
    });

    it('should be able to Click Login Button', async () => {
        LoginScreen.login()
        driver.pause(5000)
    });
});