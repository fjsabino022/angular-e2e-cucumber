import { ElementFinder, element, by } from 'protractor';

export class CalculatorPage {
  firstNumberInput: ElementFinder;
  secondNumberInput: ElementFinder
  clickButton: ElementFinder;
  latestResult: ElementFinder;

  constructor() {
    this.firstNumberInput = element(by.model('first'));
    this.secondNumberInput = element(by.model('second'));
    this.clickButton = element(by.id('gobutton'));
    this.latestResult = element(by.binding('latest'));
  }
}