import { AbstractComponent } from "../framework/view/abstract-component.js";

function createExpenseItemTemplate(task) {
  return `
    <div class="expense-item" data-id="${task.id}">
      <span>${task.name}</span>
      <span>${task.sum} руб.</span>
      <span>${task.category}</span>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
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

  setDeleteClickHandler(handler) {
    this.element.querySelector('.delete-btn').addEventListener('click', handler);
  }

  setEditClickHandler(handler) {
    this.element.querySelector('.edit-btn').addEventListener('click', handler);
  }
}