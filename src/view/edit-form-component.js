import { AbstractComponent } from "../framework/view/abstract-component.js";

function createEditFormTemplate(task) {
  return `
    <form class="edit-form">
      <input type="text" name="name" value="${task.name}" required>
      <input type="number" name="sum" value="${task.sum}" required>
      
      <select name="category">
        <option value="Продукты" ${task.category === 'Продукты' ? 'selected' : ''}>Продукты</option>
        <option value="Транспорт" ${task.category === 'Транспорт' ? 'selected' : ''}>Транспорт</option>
        <option value="Развлечения" ${task.category === 'Развлечения' ? 'selected' : ''}>Развлечения</option>
        <option value="Другое" ${task.category === 'Другое' ? 'selected' : ''}>Другое</option>
      </select>

      <button type="submit">Сохранить</button>
    </form>
  `;
}

export default class EditFormComponent extends AbstractComponent {
  constructor(task) {
    super();
    this.task = task;
  }

  get template() {
    return createEditFormTemplate(this.task);
  }

  setSubmitHandler(handler) {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const formData = new FormData(evt.target);
      handler({
        ...this.task,
        name: formData.get('name'),
        sum: formData.get('sum'),
        category: formData.get('category')
      });
    });
  }
}