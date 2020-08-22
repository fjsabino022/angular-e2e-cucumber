import { Given, When, Then, setDefaultTimeout, Before, AfterAll } from 'cucumber';
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

Then('Table of results should have {int} columns', async function (numberColumns) {
    expect(await calculatorPage.getNumberOfColumns()).to.equals(numberColumns);
});

Then('Table of results should have {int} rows', async function (numberRows) {
    expect(await calculatorPage.getNumberOfRows()).to.equals(numberRows);
});

Then('Table of results in {string} row {string} column should have the real time', async function (row, column) {
    let rowNumber: number = mapHumanLanguageToNumber(row);
    let columnNumber: number = mapHumanLanguageToNumber(column);
    expect(await calculatorPage.getColumnValueByRowIndex(columnNumber, rowNumber)).to.is.not.null;
});

Then('Table of results in {string} row {string} column should have {string}', async function (row, column, valueToCompare) {
    let rowNumber: number = mapHumanLanguageToNumber(row);
    let columnNumber: number = mapHumanLanguageToNumber(column);
    expect(await calculatorPage.getColumnValueByRowIndex(columnNumber, rowNumber)).to.equal(valueToCompare);
});

function mapHumanLanguageToNumber(humanWord: string): number {
    let position: number;
    switch (humanWord) {
        case 'first': {
            position = 1;
            break;
        }
        case 'second': {
            position = 2;
            break;
        }
        case 'third': {
            position = 3;
            break;
        }
        default: {
            throw new Error("Value not implemented. Values implemented first-second-third");
        }
    }
    return position;
}
