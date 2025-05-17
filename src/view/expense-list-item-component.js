import { AbstractComponent } from "../framework/view/abstract-component.js";

function createExpenseItemTemplate(task) {
  return `
    <div class="expense-item">
      <span>${task.name}</span>
      <span>${task.sum} руб.</span>
      <span>${task.category}</span>
    </div>
  `;
}

export default class ExpenseItemComponent extends AbstractComponent {
  constructor(task) {
    super();
    this.task = task;
  }

  get template() {
    return createExpenseItemTemplate(this.task);
  }
}