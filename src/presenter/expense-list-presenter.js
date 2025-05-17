import { render, RenderPosition } from "../framework/render.js";
import ExpenseListComponent from "../view/expense-list-component.js";
import ExpenseItemComponent from "../view/expense-list-item-component.js";
import EditFormComponent from "../view/edit-form-component.js";

export default class ExpenseListPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #expenseListComponent = null;
  #itemComponents = new Map();
  #currentFilter = 'all';
  #maxAmountFilter = false;

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
    this.#tasksModel.addObserver(this.#handleModelEvent);
    this.#expenseListComponent = new ExpenseListComponent();
  }

  get tasks() {
    return this.#tasksModel.tasks.filter(task => {
      const categoryMatch = this.#currentFilter === 'all' || task.category === this.#currentFilter;
      const amountMatch = !this.#maxAmountFilter || parseInt(task.sum) > 5000;
      return categoryMatch && amountMatch;
    });
  }

  init() {
    this.#tasksModel.init();
    this.#renderBoard();
  }

  #renderBoard() {
    render(this.#expenseListComponent, this.#boardContainer);
    this.#renderTasks();
  }

  #renderTasks() {
    const tasksContainer = this.#expenseListComponent.element.querySelector('.expense-items-container');
    tasksContainer.innerHTML = '';
    
    this.tasks.forEach(task => {
      const itemComponent = new ExpenseItemComponent(task);
      this.#itemComponents.set(task.id, itemComponent);
      
      itemComponent.setDeleteClickHandler(() => {
        this.#tasksModel.deleteTask(task.id);
      });
      
      itemComponent.setEditClickHandler(() => {
        this.#renderEditForm(task);
      });
      
      render(itemComponent, tasksContainer);
    });
  }

  #renderEditForm(task) {
    const editFormComponent = new EditFormComponent(task);
    const taskElement = this.#itemComponents.get(task.id).element;
    
    editFormComponent.setSubmitHandler((updatedTask) => {
      this.#tasksModel.updateTask(updatedTask);
      taskElement.replaceWith(this.#itemComponents.get(task.id).element);
    });
    
    taskElement.replaceWith(editFormComponent.element);
  }

  #handleModelEvent = (eventType, payload) => {
    switch (eventType) {
      case 'add':
      case 'delete':
      case 'update':
        this.#renderTasks();
        break;
    }
  };

  setFilter(category, maxAmount) {
    this.#currentFilter = category;
    this.#maxAmountFilter = maxAmount;
    this.#renderTasks();
  }
}