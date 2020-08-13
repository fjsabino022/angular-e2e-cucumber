
import { browser, element, by, ElementFinder } from 'protractor';
import { CalculatorPage } from './app.po';

const calculatorPage = new CalculatorPage();

describe('Protractor Demo App', function() {
  const url: string = 'http://juliemr.github.io/protractor-demo/';
  
  beforeEach(() => {
    browser.get(url);
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', () => {
    calculatorPage.firstNumberInput.sendKeys(1);
    calculatorPage.secondNumberInput.sendKeys(2);

    calculatorPage.clickButton.click();

    expect(calculatorPage.latestResult.getText()).toEqual('3');
  });

  it('should add four and six', () => {
    calculatorPage.firstNumberInput.sendKeys(4);
    calculatorPage.secondNumberInput.sendKeys(6);

    calculatorPage.clickButton.click();

    expect(calculatorPage.latestResult.getText()).toEqual('10');
  });

  it('should read the value from an input', () => {
    calculatorPage.firstNumberInput.sendKeys(1);
    expect(calculatorPage.firstNumberInput.getAttribute('value')).toEqual('1');
  });
});