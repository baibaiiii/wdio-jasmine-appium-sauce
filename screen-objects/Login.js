import Base from './Base';

class LoginScreen extends Base {
    constructor() {
        super('~Test APP');
    }

    get btnLogon(){ return $('~Login') }

    login () {
        this.btnLogon.waitForEnabled();
        this.btnLogon.click()

    }

}

module.exports = new LoginScreen();