import { ElementFinder, element, by, browser, ElementArrayFinder } from 'protractor';
import { ProtractorLocator } from 'protractor/built/locators';

export class CalculatorPage {
  private url: string = 'http://juliemr.github.io/protractor-demo/';
  private repeater: ProtractorLocator = by.repeater("result in memory");

  private firstNumberInput: ElementFinder;
  private secondNumberInput: ElementFinder
  private clickButton: ElementFinder;
  private latestResult: ElementFinder;
  private operations: ElementArrayFinder;
  private tableResults: ElementFinder;

  constructor() {
    this.firstNumberInput = element(by.model('first'));
    this.secondNumberInput = element(by.model('second'));
    this.clickButton = element(by.id('gobutton'));
    this.latestResult = element(by.binding('latest'));
    this.operations = element.all(by.options('value for (key, value) in operators'));
    this.tableResults = element(by.className('table'));
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

  getNumberOfColumns(): Promise<number> {
    return this.tableResults.all(by.css("th")).count() as Promise<number>;
  }

  getNumberOfRows(): Promise<number> {
    return this.tableResults.all(this.repeater).count() as Promise<number>;
  }

  getColumnValueByRowIndex(columnIndex: number, rowIndex: number): Promise<string> {
    let rowNumberFixed: number = rowIndex -1;
    let columnNumberFixed: number = columnIndex - 1;
    let row: ElementFinder = this.tableResults.element(this.repeater.row(rowNumberFixed));
    let values: ElementArrayFinder = row.all(by.css("td"));
    return values.get(columnNumberFixed).getText() as Promise<string>;
  }
}