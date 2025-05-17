import { render, RenderPosition } from "./framework/render.js";
import HeaderComponent from "./view/header-component.js";
import ExpenseFormComponent from "./view/expense-form-component.js";
import ExpenseFilterComponent from "./view/expense-filter-component.js";
import ExpenseListPresenter from "./presenter/expense-list-presenter.js";
import ItemModel from "./model/item-model.js";

const bodyContainer = document.querySelector('.container');

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new ExpenseFormComponent(), bodyContainer, RenderPosition.BEFOREEND);
render(new ExpenseFilterComponent(), bodyContainer, RenderPosition.BEFOREEND);

const expenseListPresenter = new ExpenseListPresenter(bodyContainer, new ItemModel());
expenseListPresenter.init();