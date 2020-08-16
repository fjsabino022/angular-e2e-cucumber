import { Given, When, Then, setDefaultTimeout, Before } from 'cucumber';
import { CalculatorPage } from '../src/calculator.page';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised'
import { browser } from 'protractor';

let calculatorPage: CalculatorPage;
const expect = chai.expect;

Before(() => {
    chai.use(chaiAsPromised);
});

Given('The Super calculator app is open', async function () {
    calculatorPage = new CalculatorPage();
    await browser.wait(calculatorPage.navigateTo(), 5000);
});

Given('the title is {string}', async function (title) {
    await browser.getTitle().then(text => expect(text).to.equal(title));
});

Given('I have {string} as the first number', async function (firstElement) {
    await calculatorPage.getFirstNumberElement().sendKeys(firstElement);
});

Given('I have {string} as the operation', async function (operator) {
    await calculatorPage.selectOperationByOperator(operator).click();
});

Given('I have {string} as the second number', async function (secondElement) {
    await calculatorPage.getSecondNumberElement().sendKeys(secondElement);
});

When('I execute the operation', async function () {
    await calculatorPage.getOperationButton().click();
})

Then('The result should be {string}', async function (result) {
    expect(await calculatorPage.getResult()).to.equal(result);
});

