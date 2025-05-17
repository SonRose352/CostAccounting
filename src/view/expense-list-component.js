import { AbstractComponent } from "../framework/view/abstract-component.js";

function createExpenseListTemplate() {
  return `
    <div class="expense-list">
      <div class="expense-items-container"></div>
    </div>
  `;
}

export default class ExpenseListComponent extends AbstractComponent {
  get template() {
    return createExpenseListTemplate();
  }
}