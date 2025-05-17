import { AbstractComponent } from "../framework/view/abstract-component.js";

function createExpenseFilterComponentTemplate() {
  return `
    <div class="expense-filter">
      <label>Категория:
        <select id="category-filter">
          <option value="all">Все</option>
          <option value="Продукты">Продукты</option>
          <option value="Транспорт">Транспорт</option>
          <option value="Развлечения">Развлечения</option>
        </select>
      </label>

      <label>
        <input type="checkbox" id="max-amount-filter">
        Показывать расходы более 5000 руб
      </label>
    </div>
  `;
}

export default class ExpenseFilterComponent extends AbstractComponent {
  get template() {
    return createExpenseFilterComponentTemplate();
  }

  setFilterChangeHandler(handler) {
    this.element.querySelector('#category-filter').addEventListener('change', (evt) => {
      handler({ category: evt.target.value });
    });

    this.element.querySelector('#max-amount-filter').addEventListener('change', (evt) => {
      handler({ maxAmount: evt.target.checked });
    });
  }
}