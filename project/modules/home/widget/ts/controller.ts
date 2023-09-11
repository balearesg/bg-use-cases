import { PageReactWidgetController } from "@beyond-js/react-18-widgets/page";
import { View } from "./views";
import { Manager } from "./manager";
export /*bundle*/
class Controller extends PageReactWidgetController {
  get Widget() {
    return View;
  }

  #store: any;

  createStore() {
    const manager = new Manager();
    this.#store = manager;
    return this.#store;
  }

  show() {
    if (!this.#store) return;
    this.#store.load();
  }
}
