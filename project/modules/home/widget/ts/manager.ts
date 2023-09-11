import { ReactiveModel } from "@beyond-js/reactive/model";
import { Clinics, Clinic } from "bg-use-cases/entities.ts";
import config from "bg-use-cases/config";

export class Manager extends ReactiveModel<Manager> {
  #collection: Clinics = new Clinics();

  get collection() {
    return this.#collection;
  }
  #items = [];
  get items() {
    return this.#items;
  }

  #currentPage: number = 1;
  get currentPage(): number {
    return this.#currentPage;
  }

  #limit: number = config.params.application.tables.rows;

  get limit() {
    return this.#limit;
  };
  
  #params: any = {
    limit: this.#limit,
    start: 0,
  };

  load = async () => {
    this.fetching = true;
    this.#params = {
      limit: this.#limit,
      order: "timeUpdated",
      des: "DES",
      additionalOperand: "7",
    };

    try {
      const response = await this.#collection.load(this.#params);
      if (!response.status) throw response.error;
      this.#items = response.data;
    } catch (error) {
      console.error(error);
    } finally {
      this.ready = true;
      this.fetching = false;
    }
  };

  search = async (params) => {
    this.fetching = true;
    try {
      this.#params = {
        ...this.#params,
        where: { name: params.search },
        start: 0,
      };
      const response = await this.#collection.load(this.#params);
      if (!response.status) throw response.error;
      this.#items = response.data;
      this.#currentPage = 1;
    } catch (error) {
      console.error(error);
      return error;
    } finally {
      this.fetching = false;
    }
  };

  #navigation = async (page) => {
    try {
      this.fetching = true;
      this.#params = {
        ...this.#params,
        limit: this.#limit,
        start: this.#limit * (page - 1),
      };
      const response = await this.#collection.load(this.#params);
      if (!response.status) throw new Error(response.error);
      this.#items = response.data;
      this.#currentPage = page;
      this.triggerEvent();
      return this.#collection.items;
    } catch (error) {
      console.error("error", error);
    } finally {
      this.fetching = false;
    }
  };

  hide = () => {
    this.fetching = true;
    this.ready = false;
  };

  next = (next, page) => this.#navigation(page);

  prev = (page) => this.#navigation(page);
}
