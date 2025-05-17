import { render, RenderPosition } from "./framework/render.js";
import HeaderComponent from "./view/header-component.js";
import ExpenseFormComponent from "./view/expense-form-component.js";
import ExpenseFilterComponent from "./view/expense-filter-component.js";
import ExpenseListPresenter from "./presenter/expense-list-presenter.js";
import ItemModel from "./model/item-model.js";

const container = document.querySelector('.container');
const tasksModel = new ItemModel();

render(new HeaderComponent(), container, RenderPosition.AFTERBEGIN);

const formComponent = new ExpenseFormComponent();
render(formComponent, container);
formComponent.setSubmitHandler((data) => {
  tasksModel.addTask(data);
});

const filterComponent = new ExpenseFilterComponent();
render(filterComponent, container);
filterComponent.setFilterChangeHandler((filter) => {
  expenseListPresenter.setFilter(filter.category, filter.maxAmount);
});

const expenseListPresenter = new ExpenseListPresenter({
  boardContainer: container,
  tasksModel: tasksModel
});

expenseListPresenter.init();
