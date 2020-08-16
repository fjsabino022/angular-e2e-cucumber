import { ElementFinder, element, by, browser, ElementArrayFinder } from 'protractor';

export class CalculatorPage {
  private url: string = 'http://juliemr.github.io/protractor-demo/';

  private firstNumberInput: ElementFinder;
  private secondNumberInput: ElementFinder
  private clickButton: ElementFinder;
  private latestResult: ElementFinder;
  private operations: ElementArrayFinder;

  constructor() {
    this.firstNumberInput = element(by.model('first'));
    this.secondNumberInput = element(by.model('second'));
    this.clickButton = element(by.id('gobutton'));
    this.latestResult = element(by.binding('latest'));
    this.operations = element.all(by.options('value for (key, value) in operators'));
  }

  async navigateTo(): Promise<any> {
    await browser.get(this.url) as Promise<string>;
  }

  getFirstNumberElement(): ElementFinder {
    return this.firstNumberInput;
  }

  getSecondNumberElement(): ElementFinder {
    return this.secondNumberInput;
  }

  getOperationButton(): ElementFinder {
    return this.clickButton;
  }

  getResult(): Promise<string> {
    return this.latestResult.getText() as Promise<string>;
  }

  selectOperationByOperator(operator: string): ElementFinder {
    return this.operations.filter(async function (elem, index) {
      return elem.getText().then(function (text) {
        return text === operator;
      });
    }).first();
  }
}


