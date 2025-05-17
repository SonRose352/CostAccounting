import Observable from "../framework/observable.js";
import { render, RenderPosition } from "../framework/render.js";
import ExpenseListComponent from "../view/expense-list-component.js";
import ExpenseItemComponent from "../view/expense-list-item-component.js";

export default class ExpenseListPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #expenseListComponent = null;
  #itemComponents = [];

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
  }

  get tasks() {
    return this.#tasksModel.tasks;
  }

  #renderBoard() {
    this.#expenseListComponent = new ExpenseListComponent();
    render(this.#expenseListComponent, this.#boardContainer, RenderPosition.BEFOREEND);
    this.#renderTasks();
  }

  #renderTasks() {
    const tasksContainer = this.#expenseListComponent.element.querySelector('.expense-items-container');
    
    this.tasks.forEach(task => {
      const itemComponent = new ExpenseItemComponent(task);
      this.#itemComponents.push(itemComponent);
      render(itemComponent, tasksContainer);
    });
  }

  init() {
    this.#tasksModel.init();
    this.#renderBoard;
  }
}