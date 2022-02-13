# jasmine-IOS-WebdriverIO 
This repository has been created for the Webinar about "Automating Mobile  with Appium". 

## Table of Contents
- [Prerequisites](#prerequisites)
    - [Environment](#environment)
    - [Project](#project)
    - [Test Apps](#test-apps)
    - [Sauce Labs Storage](#sauce-labs-storage)
- [Tests](#tests)
    - [Exercises](#exercises)
    - [Answers](#answers)
    - [Running them on Sauce Labs Real Devices](#running-them-on-sauce-labs-real-devices)
    
## Prerequisites
### Environment
You’ll need [Node.js](https://nodejs.org/en/) installed.

- Install at least v12.16.1 or higher as this is the oldest active LTS version
- Only releases that are or will become an LTS release are officially supported

If you don't have Node installed, we recommend installing [NVM](https://github.com/nvm-sh/nvm) to assist managing 
multiple active Node.js versions.

Also set your [Sauce Labs Credentials](https://app.saucelabs.com/user-settings) in your environmental variables if you 
want to run the tests on Sauce Labs:

```bash
export SAUCE_USERNAME=********
export SAUCE_ACCESS_KEY=*******
```

### Project
- Clone the project
- Install all dependencies with `npm install`

### Test Apps
This project has 3 test apps which can be found [here](test-apps). You will find
- an iOS Simulator build
- and an iOS Real device build

### Sauce Labs Storage
If you want to use Sauce Labs you need to upload the apps to the storage, more information can be found [here](https://wiki.saucelabs.com/display/DOCS/Application+Storage).
You can find a script to upload the used apps [here](scripts/push_apps_to_storage.sh). Here you will find
a curl command that can upload the apps to the EU and US data center for you.

> **NOTE:** Make sure you've added your credentials to your environment variables so you can start uploading the apps.

## Tests
> **NOTE:** When you run the tests it will by default run the exercise spec, if you want to run the answers please add
>the following `--suite=answers` behind the npm commands which are explained below.


### Running them on Sauce Labs Real Devices
You can find the configurations for here:

- [iOS](configs/wdio.ios.sauce.real..conf.js)

The tests can be executed on the EU Data Center, all depending on what you use. Run the following commands for
the correct Data Centers.

- **iOS EU:** `npm run test.ios.sauce.real.eu`

