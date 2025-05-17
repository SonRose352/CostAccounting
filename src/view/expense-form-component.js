import { AbstractComponent } from "../framework/view/abstract-component.js";

function createExpenseFormComponentTemplate() {
  return `
    <div class="expense-form">
      <h2>Добавить расходы</h2>
      <form id="expense-form">
        <label for="expense-name">Наименование расхода:</label>
        <input type="text" id="expense-name" name="name" required>
        
        <label for="expense-amount">Стоимость:</label>
        <input type="number" id="expense-amount" name="sum" required>
        
        <fieldset>
          <legend>Категория:</legend>
          <label><input type="radio" name="category" value="Продукты" required> Продукты</label>
          <label><input type="radio" name="category" value="Транспорт" required> Транспорт</label>
          <label><input type="radio" name="category" value="Развлечения" required> Развлечения</label>
          <label><input type="radio" name="category" value="Другое" required> Другое</label>
        </fieldset>

        <button type="submit">Добавить</button>
      </form>
    </div>
  `;
}

export default class ExpenseFormComponent extends AbstractComponent {
  get template() {
    return createExpenseFormComponentTemplate();
  }

  setSubmitHandler(handler) {
    this.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      const formData = new FormData(evt.target);
      handler({
        name: formData.get('name'),
        sum: formData.get('sum'),
        category: formData.get('category')
      });
    });
  }
}