import Observable from "../framework/observable.js";
import { items } from "../mock/mock.js";

export default class ItemModel extends Observable {
  #boardTasks = [];

  async init() {
    try {
      this.#boardTasks = [...items];
      this._notify('init', this.#boardTasks);
    } catch(err) {
      this.#boardTasks = [];
    }
  }

  get tasks() {
    return this.#boardTasks;
  }

  addTask(task) {
    const newTask = { 
      id: Date.now().toString(),
      ...task,
      sum: String(task.sum) // Сохраняем как строку для совместимости
    };
    this.#boardTasks.push(newTask);
    this._notify('add', newTask);
  }

  deleteTask(taskId) {
    this.#boardTasks = this.#boardTasks.filter((task) => task.id !== taskId);
    this._notify('delete', taskId);
  }

  updateTask(updatedTask) {
    const index = this.#boardTasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.#boardTasks[index] = updatedTask;
      this._notify('update', updatedTask);
    }
  }
}