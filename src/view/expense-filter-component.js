import { AbstractComponent } from "../framework/view/abstract-component.js";

function createExpenseFilterComponentTemplate() {
    return (
        `<div class="expense-filter">
            <label for="category-filter">Фильтр по категориям:</label>
            <select id="category-filter">
                <option value="all">Все</option>
                <option value="Food">Еда</option>
                <option value="Transport">Транспорт</option>
                <option value="Entertainment">Развлечения</option>
                <option value="Other">Другое</option>
            </select>

            <label><input type="checkbox" id="max-amount-filter" /> Показывать расходы более 5000</label>
        </div>`
      );
}


export default class ExpenseFilterComponent extends AbstractComponent {
  
  get template() {
    return createExpenseFilterComponentTemplate();
  }

}
