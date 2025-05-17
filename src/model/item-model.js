import { items } from "../mock/mock.js";

export default class ItemModel{
    #boardtasks = [];

    async init() {
        try {
          this.#boardtasks = items;
        } catch(err) {
          this.#boardtasks = [];
        }
    }
     
     

    get tasks() {
        return this.#boardtasks;
    }
}