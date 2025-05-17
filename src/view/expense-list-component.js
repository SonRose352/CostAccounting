import { AbstractComponent } from "../framework/view/abstract-component.js";

function createExpenseListTemplate() {
  return `
    <div class="expense-list">
      <h1>Учет расходов</h1>
      <div class="expense-items-container"></div>
    </div>
  `;
}

export default class ExpenseListComponent extends AbstractComponent {
  get template() {
    return createExpenseListTemplate();
  }
}